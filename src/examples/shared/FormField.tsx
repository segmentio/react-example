import React, { ChangeEvent, useState } from "react"
import { Pane, majorScale, Button, TextInputField } from "evergreen-ui"

interface Props {
  onFormSubmit: (value: string) => void
  buttonText?: string
  formLabel?: string
}

const FormField: React.FC<Props> = ({
  onFormSubmit,
  buttonText = "Submit",
  formLabel = "Name",
}) => {
  const [formValue, setFormValue] = useState<string>("")
  const [isFormInvalid, setIsFormInvalid] = useState<boolean>(false)

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFormValue(e.target.value)

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
        onChange={onInputChange}
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
