import React, { useState } from "react"
import { trackInviteSent } from "../../../analytics-quick-start/analytics"
import BaseExample from "./BaseExample"
import FormField from "../../FormField"
import { Pane } from "evergreen-ui"
import BaseCodeBlock from "./BaseCodeBlock"

const getCodeText = (formValue: string) => `analytics.track(eventName, {
  invitee_email: "${formValue}",
  invitee_first_name: "FIRST_NAME",
  invitee_last_name: "LAST_NAME",
  invitee_role: "ROLE",
})`

export const InviteSentExample: React.FC = () => {
  const [codeText, setCodeText] = useState<string>(getCodeText(""))
  const handleInputChange = (value: string) => {
    setCodeText(getCodeText(value))
  }
  return (
    <BaseExample url="https://segment.com/docs/connections/spec/b2b-saas/#invite-sent">
      <Pane
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <FormField
          onInputChange={handleInputChange}
          onFormSubmit={trackInviteSent}
          formLabel="Teammate Email"
          buttonText="Invite Teammate"
        />
        <BaseCodeBlock codeText={codeText} />
      </Pane>
    </BaseExample>
  )
}

export default InviteSentExample
