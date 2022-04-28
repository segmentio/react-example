import React from "react"
import { Pane, Heading, majorScale, Text, Link } from "evergreen-ui"

const Header: React.FC = () => (
  <Pane
    display="flex"
    flexDirection="column"
    paddingTop={majorScale(4)}
    paddingBottom={majorScale(1)}
  >
    <Heading size={800}>Welcome to our example site!</Heading>
    <Text marginTop={majorScale(4)}>
      We’ve implemented dummy data on this site so that when you click different
      buttons on the page, you’ll be able to see each test event flow through
      <Link
        href="https://github.com/segmentio/react-example#using-this-repository-as-a-segment-source"
        target="_blank"
      >
        {" "}
        fork the repository{" "}
      </Link>
      and add it as a Source in the Segment app. your Segment debugger. In order
      to make this happen, you’ll need to
    </Text>
  </Pane>
)

export default Header
