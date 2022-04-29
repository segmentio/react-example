import React, { useState } from "react"
import { Pane, majorScale, Button, Text } from "evergreen-ui"
import {
  defaultPromotionClickedProperties,
  trackPromotionClicked,
} from "../../../analytics-quick-start/analytics"
import BaseCodeBlock from "./BaseCodeBlock"
import { getStringifiedProperties } from "./utils"

const getCodeText = (
  percentage: string
) => `analytics.track("Promotion Clicked", {
  "name": "${percentage ? `${percentage}_off_next_order` : ""}",
  ${getStringifiedProperties(defaultPromotionClickedProperties)}
})`

const PromotionClickedExample: React.FC = () => {
  const [clickedPercentage, setClickedPercentage] = useState<string>("")
  const percentages = ["15%", "20%", "50%"]
  return (
    <Pane display="flex" flexDirection="column">
      <Text marginBottom={majorScale(4)}>
        Send this event when a user clicks a promotion
      </Text>
      <Pane display="flex" background="tint1" padding={majorScale(3)}>
        <Pane
          display="flex"
          flexDirection="column"
          width={majorScale(30)}
          marginRight={majorScale(3)}
        >
          <Text marginBottom={majorScale(2)}>Choose a promotion:</Text>
          {percentages.map((percent) => (
            <Button
              key={percent}
              appearance="primary"
              onClick={() => {
                setClickedPercentage(percent)
                trackPromotionClicked(clickedPercentage)
              }}
              marginBottom={majorScale(1)}
            >
              Click here for {percent} off your next order!
            </Button>
          ))}
        </Pane>
        <BaseCodeBlock
          codeText={getCodeText(clickedPercentage)}
          highlight="2"
        />
      </Pane>
    </Pane>
  )
}

export default PromotionClickedExample
