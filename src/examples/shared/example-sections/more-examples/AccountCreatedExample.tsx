import React, { useState } from "react"
import { trackAccountCreated } from "../../../analytics-quick-start/analytics"
import FormField from "../../FormField"
import { majorScale, Pane, Text } from "evergreen-ui"
import BaseCodeBlock from "./BaseCodeBlock"

const getCodeText = (formValue: string) => `analytics.track("Account Created", {
  "account_name": "${formValue}",
})`

export const AccountCreatedExample: React.FC = () => {
  const [codeText, setCodeText] = useState<string>(getCodeText(""))
  const handleInputChange = (value: string) => {
    setCodeText(getCodeText(value))
  }

  return (
    <Pane display="flex" flexDirection="column" width="100%">
      <Text marginBottom={majorScale(4)}>
        Send this event when a new account is created
      </Text>
      <Pane display="flex" background="tint1" padding={majorScale(3)}>
        <Pane display="flex" flexDirection="column" marginRight={majorScale(3)}>
          <Text marginBottom={majorScale(2)}>
            Enter an account name to create:
          </Text>
          <FormField
            onInputChange={handleInputChange}
            onFormSubmit={trackAccountCreated}
            formLabel="Account"
            buttonText="Create Account"
          />
        </Pane>
        <BaseCodeBlock codeText={codeText} highlight="2" />
      </Pane>
    </Pane>
  )
}

export default AccountCreatedExample
