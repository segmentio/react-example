import React from "react"
import { Pane, majorScale, Text, Link, Image } from "evergreen-ui"
import DebuggerImage from "./Debugger.png"
import SimpleButtonExample from "./SimpleButtonExample"

const TrackExample: React.FC = () => {
  return (
    <Pane
      display="flex"
      marginTop={majorScale(2)}
      justifyContent="space-between"
    >
      <Pane display="flex" flexDirection="column" width="100%">
        <SimpleButtonExample />
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
