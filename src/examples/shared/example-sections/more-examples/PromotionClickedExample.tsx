import React, { useState } from "react"
import { Pane, majorScale, Button } from "evergreen-ui"
import {
  defaultPromotionClickedProperties,
  trackPromotionClicked,
} from "../../../analytics-quick-start/analytics"
import BaseExample from "./BaseExample"
import BaseCodeBlock from "./BaseCodeBlock"
import { getStringifiedProperties } from "./utils"

const getCodeText = (
  percentage: string
) => `analytics.track("Promotion Clicked", {
  "name": "${percentage ? `${percentage}_off_next_order` : ""}",
  ${getStringifiedProperties(defaultPromotionClickedProperties)}
})`

const PromotionClicked: React.FC = () => {
  const [clickedPercentage, setClickedPercentage] = useState<string>("")
  const percentages = ["15%", "20%", "50%"]
  return (
    <Pane display="flex" justifyContent="space-between">
      <Pane display="flex" flexDirection="column" width={majorScale(30)}>
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
      <BaseCodeBlock codeText={getCodeText(clickedPercentage)} highlight="2" />
    </Pane>
  )
}

const PromotionClickedExample = () => (
  <BaseExample url="https://segment.com/docs/connections/spec/ecommerce/v2/#promotion-clicked">
    <PromotionClicked />
  </BaseExample>
)

export default PromotionClickedExample
