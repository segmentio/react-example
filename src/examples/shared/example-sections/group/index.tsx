import React from "react"
import { Pane, majorScale, Text, Image, Link } from "evergreen-ui"
import DebuggerImage from "./Debugger.png"
import IndustrySelectExample from "./IndustrySelectExample"

const Group: React.FC = () => {
  return (
    <Pane display="flex" width="100%" flexDirection="column">
      <Text marginTop={majorScale(1)} marginBottom={majorScale(4)}>
        analytics.group()
      </Text>
      <Text marginBottom={majorScale(3)}>
        The Group call associates an individual user with a group. For example, 
        a company, organization, account, or project.
      </Text>

      <IndustrySelectExample />

      <Text marginY={majorScale(4)}>
        When you click an industry button above, a basic{" "}
        <Link
          href="https://segment.com/docs/connections/spec/group/"
          target="blank_"
        >
          Group
        </Link>{" "}
        call is fired and sent to the Source debugger:
      </Text>

      <Image
        maxWidth="50%"
        src={DebuggerImage}
        alt="Debugger with group() call"
      />

      <Text marginTop={majorScale(2)}>
        Users can be in more than one group; however, not all downstream platforms support
        multiple groups. With the Group call, you can also record custom traits about the group,
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
