import React from "react"
import { Pane, majorScale, Text, Button } from "evergreen-ui"
import { trackButtonClicked } from "../../../analytics-quick-start/analytics"
// UNCOMMENT FOR PACKAGE EXAMPLE
// import useAnalytics from "../../../analytics-package/useAnalytics"

const SimpleButtonExample: React.FC = () => {
  // UNCOMMENT FOR PACKAGE EXAMPLE
  // const { trackButtonClicked } = useAnalytics()

  const handleButtonClick = () => {
    trackButtonClicked("analytics.track()")
  }
  return (
    <Pane
      display="flex"
      flexDirection="column"
      background="tint1"
      padding={majorScale(3)}
    >
      <Text marginBottom={majorScale(2)}>
        Click this button to trigger a Track call:
      </Text>
      <Button
        appearance="primary"
        onClick={handleButtonClick}
        width={majorScale(10)}
      >
        Click Me!
      </Button>
    </Pane>
  )
}

export default SimpleButtonExample
