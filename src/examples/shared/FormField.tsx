import React, { ChangeEvent, useState } from "react"
import { Pane, majorScale, Button, TextInputField } from "evergreen-ui"

interface Props {
  onInputChange?: (value: string) => void
  onFormSubmit: (value: string) => void
  buttonText?: string
  formLabel?: string
  placeholder?: string
  isCompact?: boolean
}

const FormField: React.FC<Props> = ({
  onFormSubmit,
  onInputChange = () => null,
  buttonText = "Submit",
  formLabel = "Name",
  placeholder,
  isCompact,
}) => {
  const [formValue, setFormValue] = useState<string>("")
  const [isFormInvalid, setIsFormInvalid] = useState<boolean>(false)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value)
    setFormValue(e.target.value)
  }

  const handleFormSubmit = () => {
    if (!formValue) {
      setIsFormInvalid(true)
      return
    }
    onFormSubmit(formValue)
  }
  return (
    <Pane
      display="flex"
      flexDirection={isCompact ? "row" : "column"}
      alignItems={isCompact ? "center" : undefined}
    >
      <TextInputField
        width={majorScale(30)}
        isInvalid={isFormInvalid}
        required
        label={formLabel}
        value={formValue}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
      <Button
        appearance="primary"
        onClick={handleFormSubmit}
        width={majorScale(15)}
        marginLeft={isCompact ? majorScale(1) : undefined}
      >
        {buttonText}
      </Button>
    </Pane>
  )
}

export default FormField
