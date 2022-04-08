import React from "react"
import { Pane, majorScale, Button } from "evergreen-ui"
import { trackPromotionClicked } from "../../../analytics-quick-start/analytics"
import BaseExample from "./BaseExample"

const PromotionClicked: React.FC = () => (
  <Pane display="flex" flexDirection="column" width={majorScale(30)}>
    <Button appearance="primary" onClick={() => trackPromotionClicked("15%")}>
      Click here for 15% off your next order!
    </Button>
  </Pane>
)

const PromotionClickedExample = () => (
  <BaseExample url="https://segment.com/docs/connections/spec/ecommerce/v2/#promotion-clicked">
    <PromotionClicked />
  </BaseExample>
)

export default PromotionClickedExample
