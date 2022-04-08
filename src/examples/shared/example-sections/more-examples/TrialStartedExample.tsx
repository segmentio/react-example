import React, { useState } from "react"
import { Pane, majorScale, Button } from "evergreen-ui"
import {
  defaultTrialStartedProperties,
  trackTrialStarted,
} from "../../../analytics-quick-start/analytics"
import BaseExample from "./BaseExample"
import BaseCodeBlock from "./BaseCodeBlock"
import { getStringifiedProperties } from "./utils"

const getFormattedToday = () => {
  const timeElapsed = Date.now()
  const today = new Date(timeElapsed)
  return today.toISOString()
}

const getCodeText = (startDate: string) => `analytics.track(eventName, {
  trial_start_date: "${startDate}",
  ${getStringifiedProperties(defaultTrialStartedProperties)}
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
