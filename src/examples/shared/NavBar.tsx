import React from "react"
import { Pane, Button, GlobeIcon, majorScale } from "evergreen-ui"

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
    >
      <Button
        iconBefore={GlobeIcon}
        outline="none"
        appearance="minimal"
        is="a"
        href={"https://app.segment.com/"}
        target="blank_"
      >
        Segment
      </Button>
    </Pane>
  </Pane>
)

export default Navbar
