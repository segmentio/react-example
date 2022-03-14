import React from "react"
import { Pane, Heading, majorScale, Text } from "evergreen-ui"

const Header: React.FC = () => (
    <Pane 
        display="flex"
        flexDirection="column"
        paddingY={majorScale(4)}
        borderBottom
    >
        <Heading size={800}>Getting Started</Heading>
        <Text marginTop={majorScale(1)}>This page has examples implementing Segment’s Page, Track, Identify, and Group calls.</Text>
    </Pane>
)

export default Header