import React, { useState } from "react"
import { trackAccountCreated } from "../../../analytics-quick-start/analytics"
import BaseExample from "./BaseExample"
import FormField from "../../FormField"
import { Pane } from "evergreen-ui"
import BaseCodeBlock from "./BaseCodeBlock"

const getCodeText = (formValue: string) => `analytics.track("Account Created", {
  account_name: "${formValue}",
})`

export const AccountCreatedExample: React.FC = () => {
  const [codeText, setCodeText] = useState<string>(getCodeText(""))
  const handleInputChange = (value: string) => {
    setCodeText(getCodeText(value))
  }

  return (
    <BaseExample url="https://segment.com/docs/connections/spec/b2b-saas/#account-created">
      <Pane display="flex" justifyContent="space-between">
        <FormField
          onInputChange={handleInputChange}
          onFormSubmit={trackAccountCreated}
          formLabel="Account"
          buttonText="Create Account"
        />
        <BaseCodeBlock codeText={codeText} />
      </Pane>
    </BaseExample>
  )
}

export default AccountCreatedExample
