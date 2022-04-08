import React from "react"
import { trackAccountCreated } from "../../../analytics-quick-start/analytics"
import BaseExample from "./BaseExample"
import FormField from "../../FormField"

export const AccountCreatedExample: React.FC = () => (
  <BaseExample url="https://segment.com/docs/connections/spec/b2b-saas/#account-created">
    <FormField
      onFormSubmit={trackAccountCreated}
      formLabel="Account"
      buttonText="Create Account"
    />
  </BaseExample>
)

export default AccountCreatedExample
