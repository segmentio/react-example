import React from "react"
import { Pane, majorScale, Text, Link, minorScale, Image } from "evergreen-ui"
import SourceSettingsImage from "./SourceSettings.png"

const SourceWriteKeyExample: React.FC = () => (
  <Pane display="flex" marginTop={majorScale(2)} justifyContent="space-between">
    <Pane display="flex" flexDirection="column">
      <Text>
        Your Source Write Key is found in your Source settings. Supplementary
        documentation can be found{" "}
        <Link href="https://segment.com/docs/connections/find-writekey/">
          here.
        </Link>
      </Text>
      <Text marginTop={minorScale(1)}>
        After copying your Source Write Key, follow the steps{" "}
        <Link
          target="blank_"
          href="https://github.com/segmentio/react-example#using-this-repository-as-a-segment-source"
        >
          in the README.md
        </Link>{" "}
        to use this website as a Source.
      </Text>
    </Pane>

    <Image
      maxWidth="50%"
      src={SourceSettingsImage}
      alt="Source settings page"
    />
  </Pane>
)

export default SourceWriteKeyExample
