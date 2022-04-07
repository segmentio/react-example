import React from "react"
import { Pane, Heading, majorScale, Text } from "evergreen-ui"
import { Ref } from "react"
import { AnalyticsEventSection } from "./example-sections/constants"

interface ExampleSectionProps extends AnalyticsEventSection {
  innerRef: Ref<HTMLDivElement>
  children: React.ReactNode
}

const ExampleSection: React.FC<ExampleSectionProps> = ({
  title,
  description,
  children,
  innerRef,
  type,
}) => {
  const isHeader = type === "header"
  return (
    <Pane
      ref={innerRef}
      display="flex"
      flexDirection="column"
      borderTop={isHeader ? "1px solid black" : true}
      paddingY={majorScale(4)}
    >
      <Heading size={isHeader ? 800 : 600}>{title}</Heading>
      <Text marginTop={majorScale(1)} marginBottom={majorScale(3)}>
        {description}
      </Text>
      {children}
    </Pane>
  )
}

export default ExampleSection
