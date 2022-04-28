import React from "react"
import { Pane, majorScale, Text, Link, Image } from "evergreen-ui"
import DebuggerImage from "./Debugger.png"

const Page: React.FC = () => (
  <Pane display="flex" flexDirection="column">
    <Text marginTop={majorScale(1)} marginBottom={majorScale(4)}>
      analytics.page()
    </Text>
    <Text marginBottom={majorScale(2)}>
      The Page call lets you record whenever a user sees a page of your website,
      along with any optional properties about the page.
    </Text>
    <Text marginBottom={majorScale(2)}>
      When you first navigated to this site, a{" "}
      <Link
        href="https://segment.com/docs/connections/spec/page/"
        target="blank_"
      >
        Page
      </Link>{" "}
      event was fired and sent to your debugger:
    </Text>
    <Image maxWidth="75%" src={DebuggerImage} alt="Debugger with page() call" />
  </Pane>
)

export default Page
