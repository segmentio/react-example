import React from "react"
import { Pane, majorScale, Text, Link } from "evergreen-ui"

const Header: React.FC = () => (
  <Pane display="flex" flexDirection="column">
    <Text marginTop={majorScale(4)}>
      To use this site, 
      <Link
        href="https://github.com/segmentio/react-example#using-this-repository-as-a-segment-source"
        target="_blank"
      >
        {" "}
        fork the repository{" "}
      </Link>
       and add it as a Source in your Segment workspace. 
      Then, when you interact with the page, you’ll see each test event flow through to the Segment debugger.
    </Text>
  </Pane>
)

export default Header
