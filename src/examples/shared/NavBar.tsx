import React from "react"
import {
  Pane,
  Button,
  GlobeIcon,
  GitRepoIcon,
  BookIcon,
  majorScale,
  IconButton,
} from "evergreen-ui"

const NavButton: React.FC<{
  icon: typeof GlobeIcon | typeof GitRepoIcon
  href: string
}> = ({ icon, href }) => (
  <IconButton
    icon={icon}
    outline="none"
    appearance="minimal"
    is="a"
    marginRight={majorScale(1)}
    href={href}
    target="blank_"
  />
)

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
    <Pane>
      <NavButton
        icon={GitRepoIcon}
        href="https://github.com/segmentio/react-example"
      />
      <NavButton icon={BookIcon} href="https://segment.com/docs/" />
    </Pane>
  </Pane>
)

export default Navbar
