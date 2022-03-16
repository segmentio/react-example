import React from "react"
import {
  Pane,
  majorScale,
  Text,
  Button,
  Image,
  toaster,
  EditIcon,
  CodeBlockIcon,
  DocumentIcon,
  Link,
} from "evergreen-ui"
import { groupUser } from "../../../analytics-quick-start/analytics"
import DebuggerImage from "./Debugger.png"
import { Industry, IndustryEnum } from "./types"
// UNCOMMENT FOR PACKAGE EXAMPLE
// import useAnalytics from "../../../analytics-package/useAnalytics"

const MoreExamplesGroup: React.FC = () => {
  // UNCOMMENT FOR PACKAGE EXAMPLE
  // const { groupUser } = useAnalytics()

  const handleButtonClick = (industry: Industry) => {
    groupUser(industry)
    toaster.success("Group call fired")
  }

  return (
    <Pane
      display="flex"
      marginTop={majorScale(2)}
      justifyContent="space-between"
    >
      <Pane display="flex" width="100%" flexDirection="column">
        <Pane display="flex" flexDirection="column" alignSelf="center">
          <Text marginBottom={majorScale(2)}>Choose your industry:</Text>
          {Object.values(IndustryEnum).map((industry, i) => {
            let buttonIcon
            switch (i) {
              case 0:
                buttonIcon = EditIcon
                break
              case 1:
                buttonIcon = DocumentIcon
                break
              case 2:
                buttonIcon = CodeBlockIcon
                break
            }
            return (
              <Button
                key={industry}
                marginY={8}
                marginRight={12}
                intent={"none"}
                iconBefore={buttonIcon}
                onClick={() => handleButtonClick(industry)}
              >
                {industry}
              </Button>
            )
          })}
        </Pane>

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
