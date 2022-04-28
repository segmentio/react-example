import React from "react"
import { Pane, majorScale, Text, Link } from "evergreen-ui"

const Header: React.FC = () => (
  <Pane display="flex" flexDirection="column">
    <Text marginTop={majorScale(4)}>
      We’ve implemented dummy data on this site so that when you click different
      buttons on the page, you’ll be able to see each test event flow through
      your Segment debugger. In order to make this happen, you’ll need to
      <Link
        href="https://github.com/segmentio/react-example#using-this-repository-as-a-segment-source"
        target="_blank"
      >
        {" "}
        fork the repository{" "}
      </Link>
      and add it as a Source in the Segment app.
    </Text>
  </Pane>
)

export default Header
