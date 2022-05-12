import React from "react"
import { Pane, majorScale, Text, Link, Image } from "evergreen-ui"
import SourceSettingsImage from "./SourceSettings.png"

const SourceWriteKey: React.FC = () => (
  <Pane display="flex" flexDirection="column" justifyContent="space-between">
    <Text marginBottom={majorScale(2)} marginTop={majorScale(4)}>
      Configure this site as a Source in your Segment workspace.
    </Text>
    <Text>
      The Source Write Key is found in the Source settings in the Segment app.
      For more information, see{" "}
      <Link href="https://segment.com/docs/connections/find-writekey/">
        Locate your Write Key.
      </Link>
    </Text>
    <Text marginBottom={majorScale(2)} marginTop={majorScale(2)}>
      After you copy the Source Write Key, follow the steps{" "}
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
