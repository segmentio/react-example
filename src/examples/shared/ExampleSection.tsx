import React from "react"
import { Pane, Heading, majorScale, Text } from "evergreen-ui"
import { Ref } from "react"

interface ExampleSectionProps {
    title: string 
    description: string 
    children: React.ReactNode
    innerRef: Ref<HTMLDivElement>
} 

const ExampleSection: React.FC<ExampleSectionProps> = ({ title, description, children, innerRef }) => (
    <Pane 
        ref={innerRef}
        display="flex"
        flexDirection="column"
        borderBottom
        paddingY={majorScale(4)}
    >
        <Heading size={600}>{title}</Heading>
        <Text marginTop={majorScale(1)}
            marginBottom={majorScale(3)}>{description}</Text>
        {children}
    </Pane>
)

export default ExampleSection