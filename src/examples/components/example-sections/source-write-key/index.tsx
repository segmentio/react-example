import React from "react"
import { Pane, majorScale, Text, Link } from "evergreen-ui"
import SourceSettingsImage from "./SourceSettings.png"

const SourceWriteKeyExample: React.FC = () => (
    <Pane 
        display="flex"
        flexDirection="column"
        marginTop={majorScale(2)}
    >
        <Pane>
            <Text>Your Source Write Key is found in your Source settings. Supplementary documentation can be found</Text>{" "}
            <Link href="https://segment.com/docs/connections/find-writekey/">here.</Link>
        </Pane>
        <Pane 
            display="flex"
            flexDirection="column"
            alignItems="center"
            marginTop={majorScale(2)}

        >
            <img 
                style={{ "max-width": "75%" } as any}
                src={SourceSettingsImage}
                alt="Source settings page"
            />
        </Pane>
        <Pane display="flex">
            <Text>After copying your Source Write Key, follow the steps</Text>{" "}
            <Link 
                target="blank_"
                href="https://github.com/segmentio/react-example#using-this-repository-as-a-segment-source">in the README.md</Link>{" "}
            <Text>
                to use this website as a Source.
            </Text>
        </Pane>
        
    </Pane>
)

export default SourceWriteKeyExample