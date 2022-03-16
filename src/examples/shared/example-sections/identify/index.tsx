import React, { ChangeEvent, useState } from "react"
import {
  Pane,
  majorScale,
  Text,
  Link,
  Button,
  Image,
  TextInputField,
  toaster,
  minorScale,
} from "evergreen-ui"
import {
  identifyUser,
  trackButtonClicked,
} from "../../../analytics-quick-start/analytics"
import DebuggerImage from "./Debugger.png"
// UNCOMMENT FOR PACKAGE EXAMPLE
// import useAnalytics from "../../../analytics-package/useAnalytics"

const IdentifyExample: React.FC = () => {
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
      marginTop={majorScale(2)}
      justifyContent="space-between"
    >
      <Pane display="flex" flexDirection="column" width="100%">
        <Pane
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignSelf="center"
          width="80%"
        >
          <Text marginBottom={minorScale(1)}>
            Enter a name in the form field.
          </Text>
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
        <Text marginTop={majorScale(2)}>
          When the button is clicked, a basic{" "}
          <Link
            href="https://segment.com/docs/connections/spec/identify/"
            target="blank_"
          >
            Identify
          </Link>{" "}
          call is fired and sent to your debugger.
        </Text>
        <Text marginTop={majorScale(1)}>
          Identify events require a{" "}
          <Link
            href="https://segment.com/docs/connections/spec/identify/#identities"
            target="blank_"
          >
            user or anonymous ID
          </Link>
          . Our browser and mobile libraries automatically use Anonymous IDs
          under the covers to keep track of users as they navigate around your
          website or app, so in this case, you don’t need to worry about them.
        </Text>
      </Pane>

      <Image
        maxWidth="50%"
        src={DebuggerImage}
        alt="Debugger with identify() call"
      />
    </Pane>
  )
}

export default IdentifyExample
