import React from "react"
import { Pane, majorScale, Text, Link, Image } from "evergreen-ui"
import DebuggerImage from "./Debugger.png"

const Page: React.FC = () => (
  <Pane display="flex" marginTop={majorScale(2)} justifyContent="space-between">
    <Pane display="flex" flexDirection="column">
      <Text>
        Upon loading this page, a{" "}
        <Link
          href="https://segment.com/docs/connections/spec/page/"
          target="blank_"
        >
          Page
        </Link>{" "}
        event was fired and sent to your debugger.
      </Text>
    </Pane>

    <Image maxWidth="50%" src={DebuggerImage} alt="Debugger with page() call" />
  </Pane>
)

export default Page
