import React, { useState } from "react"
import { Pane, majorScale, Button } from "evergreen-ui"
import { trackTrialStarted } from "../../../analytics-quick-start/analytics"
import BaseExample from "./BaseExample"
import BaseCodeBlock from "./BaseCodeBlock"

const getFormattedToday = () => {
  const timeElapsed = Date.now()
  const today = new Date(timeElapsed)
  return today.toISOString()
}

const getCodeText = (startDate: string) => `analytics.track(eventName, {
  trial_start_date: "${startDate}",
  trial_end_date: "END_DATE",
  trial_plan_name: "PLAN NAME",
})`

const TrialStarted: React.FC = () => {
  const [formattedToday, setFormattedToday] = useState(getFormattedToday())

  return (
    <Pane display="flex" justifyContent="space-between">
      <Pane display="flex" flexDirection="column" width={majorScale(30)}>
        <Button
          appearance="primary"
          onClick={() => {
            setFormattedToday(getFormattedToday())
            trackTrialStarted(formattedToday)
          }}
        >
          Start Trial
        </Button>
      </Pane>
      <BaseCodeBlock codeText={getCodeText(formattedToday)} />
    </Pane>
  )
}

const TrialStartedExample = () => (
  <BaseExample url="https://segment.com/docs/connections/spec/ecommerce/v2/#promotion-clicked">
    <TrialStarted />
  </BaseExample>
)

export default TrialStartedExample
