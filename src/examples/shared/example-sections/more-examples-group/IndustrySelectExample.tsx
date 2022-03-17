import React from "react"
import {
  Pane,
  majorScale,
  Text,
  Button,
  toaster,
  EditIcon,
  CodeBlockIcon,
  DocumentIcon,
} from "evergreen-ui"
import { groupUser } from "../../../analytics-quick-start/analytics"
import { Industry, IndustryEnum } from "./types"
// UNCOMMENT FOR PACKAGE EXAMPLE
// import useAnalytics from "../../../analytics-package/useAnalytics"

const IndustrySelectExample: React.FC = () => {
  // UNCOMMENT FOR PACKAGE EXAMPLE
  // const { groupUser } = useAnalytics()

  const handleButtonClick = (industry: Industry) => {
    groupUser(industry)
    toaster.success("Group call fired")
  }

  return (
    <Pane display="flex" flexDirection="column" alignSelf="center">
      <Text marginBottom={majorScale(2)}>Choose your industry:</Text>
      {Object.values(IndustryEnum).map((industry) => {
        let buttonIcon
        switch (industry) {
          case IndustryEnum.Advertising:
            buttonIcon = EditIcon
            break
          case IndustryEnum.Marketing:
            buttonIcon = DocumentIcon
            break
          case IndustryEnum.Technology:
            buttonIcon = CodeBlockIcon
            break
        }
        return (
          <Button
            key={industry}
            marginY={majorScale(1)}
            intent={"none"}
            iconBefore={buttonIcon}
            onClick={() => handleButtonClick(industry)}
          >
            {industry}
          </Button>
        )
      })}
    </Pane>
  )
}

export default IndustrySelectExample
