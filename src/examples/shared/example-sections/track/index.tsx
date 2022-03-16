import React from "react"
import {
  Pane,
  majorScale,
  Text,
  Link,
  Button,
  Image,
  toaster,
} from "evergreen-ui"
import { trackButtonClicked } from "../../../analytics-quick-start/analytics"
import DebuggerImage from "./Debugger.png"
// UNCOMMENT FOR PACKAGE EXAMPLE
// import useAnalytics from "../../../analytics-package/useAnalytics"

const TrackExample: React.FC = () => {
  // UNCOMMENT FOR PACKAGE EXAMPLE
  // const { trackButtonClicked } = useAnalytics()

  const handleButtonClick = () => {
    trackButtonClicked("analytics.track()")
    toaster.success("Track call fired")
  }
  return (
    <Pane
      display="flex"
      marginTop={majorScale(2)}
      justifyContent="space-between"
    >
      <Pane display="flex" flexDirection="column" width="100%">
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
        <Text marginTop={majorScale(2)}>
          When the button is clicked, a basic{" "}
          <Link
            href="https://segment.com/docs/connections/spec/track/"
            target="blank_"
          >
            Track
          </Link>{" "}
          call is fired and sent to your debugger.
        </Text>
        <Text marginTop={majorScale(1)}>
          Notice that an{" "}
          <Link
            href="https://segment.com/docs/connections/spec/track/#identities"
            target="blank_"
          >
            anonymous user id
          </Link>{" "}
          is assigned.
        </Text>
      </Pane>

      <Image
        maxWidth="50%"
        src={DebuggerImage}
        alt="Debugger with track() call"
      />
    </Pane>
  )
}

export default TrackExample
