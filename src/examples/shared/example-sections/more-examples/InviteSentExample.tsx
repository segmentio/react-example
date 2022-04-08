import React from "react"
import { trackInviteSent } from "../../../analytics-quick-start/analytics"
import BaseExample from "./BaseExample"
import FormField from "../../FormField"

export const InviteSentExample: React.FC = () => (
  <BaseExample url="https://segment.com/docs/connections/spec/b2b-saas/#invite-sent">
    <FormField
      onFormSubmit={trackInviteSent}
      formLabel="Teammate Email"
      buttonText="Invite Teammate"
    />
  </BaseExample>
)

export default InviteSentExample
