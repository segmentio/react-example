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
      marginBottom={majorScale(5)}
    >
      <Heading size={isHeader ? 800 : 600}>{title}</Heading>
      {description && <Text marginTop={majorScale(1)}>{description}</Text>}
      <Pane marginTop={majorScale(4)}>{children}</Pane>
    </Pane>
  )
}

export default ExampleSection
