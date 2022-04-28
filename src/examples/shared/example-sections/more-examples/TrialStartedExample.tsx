import React, { useState } from "react"
import { Pane, majorScale, Button, Text } from "evergreen-ui"
import {
  defaultTrialStartedProperties,
  trackTrialStarted,
} from "../../../analytics-quick-start/analytics"
import BaseCodeBlock from "./BaseCodeBlock"
import { getStringifiedProperties } from "./utils"

const getFormattedToday = () => {
  const timeElapsed = Date.now()
  const today = new Date(timeElapsed)
  return today.toISOString()
}

const getCodeText = (startDate: string) => `analytics.track("Product Viewed", {
  "trial_start_date": "${startDate}",
  ${getStringifiedProperties(defaultTrialStartedProperties)}
})`

const TrialStartedExample: React.FC = () => {
  const [formattedToday, setFormattedToday] = useState("")

  return (
    <Pane display="flex" flexDirection="column">
      <Text marginBottom={majorScale(4)}>
        Send this event when a trial is started
      </Text>
      <Pane display="flex" background="tint1" padding={majorScale(3)}>
        <Pane display="flex" flexDirection="column" marginRight={majorScale(3)}>
          <Text marginBottom={majorScale(2)}>
            Click the button to ’start a trial’:
          </Text>
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
        <BaseCodeBlock codeText={getCodeText(formattedToday)} highlight="2" />
      </Pane>
    </Pane>
  )
}

export default TrialStartedExample
