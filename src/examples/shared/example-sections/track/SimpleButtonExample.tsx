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
      alignItems="center"
      justifyContent="center"
      justifySelf="center"
    >
      <Text>Click the button below.</Text>
      <Button
        appearance="primary"
        marginY={majorScale(2)}
        onClick={handleButtonClick}
      >
        Click Me!
      </Button>
    </Pane>
  )
}

export default SimpleButtonExample
