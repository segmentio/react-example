import React, { useState } from "react"
import {
  defaultInviteSentProperties,
  trackInviteSent,
} from "../../../analytics-quick-start/analytics"
import FormField from "../../FormField"
import { Pane, Text, majorScale } from "evergreen-ui"
import BaseCodeBlock from "./BaseCodeBlock"
import { getStringifiedProperties } from "./utils"

const getCodeText = (formValue: string) => `analytics.track("Invite Sent", {
  "invitee_email": "${formValue}",
  ${getStringifiedProperties(defaultInviteSentProperties)}
})`

export const InviteSentExample: React.FC = () => {
  const [codeText, setCodeText] = useState<string>(getCodeText(""))
  const handleInputChange = (value: string) => {
    setCodeText(getCodeText(value))
  }
  return (
    <Pane display="flex" flexDirection="column" width="100%">
      <Text marginBottom={majorScale(4)}>
        Send this event when a a user invites another user
      </Text>
      <Pane display="flex" background="tint1" padding={majorScale(3)}>
        <Pane display="flex" flexDirection="column" marginRight={majorScale(3)}>
          <Text marginBottom={majorScale(2)}>Enter an email to ’invite’:</Text>
          <FormField
            onInputChange={handleInputChange}
            onFormSubmit={trackInviteSent}
            formLabel="Teammate Email"
            buttonText="Invite Teammate"
          />
        </Pane>
        <BaseCodeBlock codeText={codeText} highlight="2" />
      </Pane>
    </Pane>
  )
}

export default InviteSentExample
