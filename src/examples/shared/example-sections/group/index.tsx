import React from "react"
import { Pane, majorScale, Text, Image, Link } from "evergreen-ui"
import DebuggerImage from "./Debugger.png"
import IndustrySelectExample from "./IndustrySelectExample"

const Group: React.FC = () => {
  return (
    <Pane display="flex" width="100%" flexDirection="column">
      <Text marginBottom={majorScale(3)}>
        The Group call is how you associate an individual user with a group—like
        a company, organization, account, project, etc.
      </Text>

      <IndustrySelectExample />

      <Text marginY={majorScale(4)}>
        When you click an industry button, a basic{" "}
        <Link
          href="https://segment.com/docs/connections/spec/group/"
          target="blank_"
        >
          Group
        </Link>{" "}
        call is fired and sent to your debugger:
      </Text>

      <Image
        maxWidth="50%"
        src={DebuggerImage}
        alt="Debugger with group() call"
      />

      <Text marginTop={majorScale(2)}>
        A user can be in more than one group; however, not all platforms support
        multiple groups. It also lets you record custom traits about the group,
        like industry or number of employees.
      </Text>
      <Text>
        Calling group is a slightly more advanced feature, but it’s helpful if
        you have accounts with multiple users.
      </Text>
    </Pane>
  )
}

export default Group
