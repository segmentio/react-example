import React from "react"
import { Pane, majorScale, Button } from "evergreen-ui"
import { trackTrialStarted } from "../../../analytics-quick-start/analytics"
import BaseExample from "./BaseExample"

const TrialStarted: React.FC = () => {
  const timeElapsed = Date.now()
  const today = new Date(timeElapsed)
  const formattedToday = today.toISOString()
  return (
    <Pane display="flex" flexDirection="column" width={majorScale(30)}>
      <Button
        appearance="primary"
        onClick={() => trackTrialStarted(formattedToday)}
      >
        Start Trial
      </Button>
    </Pane>
  )
}

const TrialStartedExample = () => (
  <BaseExample url="https://segment.com/docs/connections/spec/ecommerce/v2/#promotion-clicked">
    <TrialStarted />
  </BaseExample>
)

export default TrialStartedExample
