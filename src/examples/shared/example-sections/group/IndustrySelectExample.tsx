import React from "react"
import {
  Pane,
  majorScale,
  Text,
  Button,
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
  }

  return (
    <Pane
      display="flex"
      background="tint1"
      padding={majorScale(3)}
      flexDirection="column"
    >
      <Text marginBottom={majorScale(2)}>Choose an industry:</Text>
      <Pane>
        {Object.values(Industry).map((industry) => (
          <Button
            key={industry}
            marginRight={majorScale(2)}
            intent={"none"}
            iconBefore={INDUSTRY_ICONS[industry]}
            onClick={() => handleButtonClick(industry)}
          >
            {industry}
          </Button>
        ))}
      </Pane>
    </Pane>
  )
}

export default IndustrySelectExample
