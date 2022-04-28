import React, { ChangeEvent, useState } from "react"
import { Pane, majorScale, Button, TextInputField } from "evergreen-ui"

interface Props {
  onInputChange?: (value: string) => void
  onFormSubmit: (value: string) => void
  buttonText?: string
  formLabel?: string
  placeholder?: string
}

const FormField: React.FC<Props> = ({
  onFormSubmit,
  onInputChange = () => null,
  buttonText = "Submit",
  formLabel = "Name",
  placeholder,
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
    <Pane display="flex" alignItems="center">
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
        marginLeft={majorScale(1)}
      >
        {buttonText}
      </Button>
    </Pane>
  )
}

export default FormField
