import React, { ChangeEvent, useState } from "react"
import {
  Pane,
  majorScale,
  Text,
  Button,
  TextInputField,
  toaster,
  minorScale,
} from "evergreen-ui"
import {
  identifyUser,
  trackButtonClicked,
} from "../../../analytics-quick-start/analytics"
// UNCOMMENT FOR PACKAGE EXAMPLE
// import useAnalytics from "../../../analytics-package/useAnalytics"

const FormFieldExample: React.FC = () => {
  // UNCOMMENT FOR PACKAGE EXAMPLE
  // const { identifyUser, trackButtonClicked } = useAnalytics()

  const [formValue, setFormValue] = useState<string>("")
  const [isFormInvalid, setIsFormInvalid] = useState<boolean>(false)

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFormValue(e.target.value)

  const handleFormSubmit = () => {
    if (!formValue) {
      setIsFormInvalid(true)
      return
    }
    identifyUser(formValue)
    trackButtonClicked("analytics.identify()")
    toaster.success("Identify call fired")
  }
  return (
    <Pane
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignSelf="center"
      width="80%"
    >
      <Text marginBottom={minorScale(1)}>Enter a name in the form field.</Text>
      <Pane display="flex" alignItems="center">
        <TextInputField
          width="100%"
          isInvalid={isFormInvalid}
          required
          label="Name"
          value={formValue}
          onChange={onInputChange}
        />
        <Button
          appearance="primary"
          onClick={handleFormSubmit}
          marginLeft={majorScale(1)}
        >
          Submit
        </Button>
      </Pane>
    </Pane>
  )
}

export default FormFieldExample
