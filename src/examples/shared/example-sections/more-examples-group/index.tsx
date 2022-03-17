import React from "react"
import { Pane, majorScale, Text, Image, Link } from "evergreen-ui"
import DebuggerImage from "./Debugger.png"
import IndustrySelectExample from "./IndustrySelectExample"

const MoreExamplesGroup: React.FC = () => {
  return (
    <Pane
      display="flex"
      marginTop={majorScale(2)}
      justifyContent="space-between"
    >
      <Pane display="flex" width="100%" flexDirection="column">
        <IndustrySelectExample />

        <Text marginTop={majorScale(4)}>
          When the button is clicked, a basic{" "}
          <Link
            href="https://segment.com/docs/connections/spec/group/"
            target="blank_"
          >
            Group
          </Link>{" "}
          call is fired and sent to your debugger.
        </Text>
        <Text marginTop={majorScale(2)}>
          A user can be in more than one group; however, not all platforms
          support multiple groups. It also lets you record custom traits about
          the group, like industry or number of employees.
        </Text>
        <Text marginTop={majorScale(2)}>
          Calling group is a slightly more advanced feature, but it’s helpful if
          you have accounts with multiple users.
        </Text>
      </Pane>

      <Image
        maxWidth="50%"
        src={DebuggerImage}
        alt="Debugger with group() call"
      />
    </Pane>
  )
}

export default MoreExamplesGroup
