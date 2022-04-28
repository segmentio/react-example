import React from "react"
import { Pane, majorScale, Text, Link, Image } from "evergreen-ui"
import SourceSettingsImage from "./SourceSettings.png"

const SourceWriteKey: React.FC = () => (
  <Pane display="flex" flexDirection="column" justifyContent="space-between">
    <Text marginBottom={majorScale(2)} marginTop={majorScale(4)}>
      You must first set up this Source in order to see events flowing through
      your debugger.
    </Text>
    <Text>
      Your Source Write Key is found in your Source settings in the Segment app.
      Supplementary documentation can be found{" "}
      <Link href="https://segment.com/docs/connections/find-writekey/">
        here.
      </Link>
    </Text>
    <Text marginBottom={majorScale(2)}>
      After copying your Source Write Key, follow the steps{" "}
      <Link
        target="blank_"
        href="https://github.com/segmentio/react-example#using-this-repository-as-a-segment-source"
      >
        in the README.md
      </Link>{" "}
      to use this website as a Source.
    </Text>
    <Image
      maxWidth="75%"
      src={SourceSettingsImage}
      alt="Source settings page"
    />
  </Pane>
)

export default SourceWriteKey
