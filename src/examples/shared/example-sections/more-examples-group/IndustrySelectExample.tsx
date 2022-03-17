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
  IconComponent,
} from "evergreen-ui"
import { groupUser } from "../../../analytics-quick-start/analytics"
import { Industry } from "./types"
// UNCOMMENT FOR PACKAGE EXAMPLE
// import useAnalytics from "../../../analytics-package/useAnalytics"

const INDUSTRY_ICONS: Record<Industry, IconComponent> = {
  [Industry.Advertising]: EditIcon,
  [Industry.Marketing]: DocumentIcon,
  [Industry.Technology]: CodeBlockIcon,
}

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
      {Object.values(Industry).map((industry) => (
        <Button
          key={industry}
          marginY={majorScale(1)}
          intent={"none"}
          iconBefore={INDUSTRY_ICONS[industry]}
          onClick={() => handleButtonClick(industry)}
        >
          {industry}
        </Button>
      ))}
    </Pane>
  )
}

export default IndustrySelectExample
