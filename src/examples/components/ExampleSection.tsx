import React from "react"
import { Pane, Heading, majorScale, Text } from "evergreen-ui"

const ExampleSection: React.FC<{title: string, description: string, children: React.ReactNode}> = ({ title, description, children }) => (
    <Pane 
        display="flex"
        flexDirection="column"
        marginTop={majorScale(2)}
        borderBottom={"1px solid"}
        paddingBottom={majorScale(2)}
    >
        <Heading size={600}>{title}</Heading>
        <Text marginTop={majorScale(1)}>{description}</Text>
        {children}
    </Pane>
)

export default ExampleSection