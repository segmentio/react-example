import React from "react"
import { Pane, Heading, majorScale, Image } from "evergreen-ui"
import SegmentLogo from "./segmentlogo.png"

const Navbar: React.FC = () => (
  <Pane
    display="flex"
    justifyContent="space-between"
    background="gray75"
    height={majorScale(6)}
    alignItems="center"
    paddingX={majorScale(3)}
  >
    <Pane
      alignItems="center"
      display="flex"
      textDecoration="none"
      color="inherit"
      cursor="pointer"
      justifyContent="center"
    >
      <Image src={SegmentLogo} />
      <Heading
        marginLeft={majorScale(1)}
        is="a"
        href={"https://app.segment.com/"}
        target="blank_"
        textDecoration="none"
      >
        Segment
      </Heading>
    </Pane>
  </Pane>
)

export default Navbar
