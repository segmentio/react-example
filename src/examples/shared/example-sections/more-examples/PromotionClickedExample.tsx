import React from "react"
import { Pane, majorScale, Button } from "evergreen-ui"
import { trackPromotionClicked } from "../../../analytics-quick-start/analytics"
import BaseExample from "./BaseExample"
import BaseCodeBlock from "./BaseCodeBlock"

const PERCENT_OFF = "15%"

const codeText = `analytics.track("Promotion Clicked", {
  name: "${PERCENT_OFF}_off_next_order",
  promotion_id: "promo_1",
  creative: "button_example",
  position: "ecommerce_examples",
})`

const PromotionClicked: React.FC = () => (
  <Pane display="flex" flexDirection="column" width={majorScale(30)}>
    <Button appearance="primary" onClick={() => trackPromotionClicked("15%")}>
      Click here for {PERCENT_OFF} off your next order!
    </Button>
  </Pane>
)

const PromotionClickedExample = () => (
  <BaseExample url="https://segment.com/docs/connections/spec/ecommerce/v2/#promotion-clicked">
    <Pane display="flex" justifyContent="space-between">
      <PromotionClicked />
      <BaseCodeBlock codeText={codeText} />
    </Pane>
  </BaseExample>
)

export default PromotionClickedExample
