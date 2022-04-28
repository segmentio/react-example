import React from "react"
import { Pane, Heading, majorScale, Button, ShareIcon } from "evergreen-ui"
import { Ref } from "react"
import { AnalyticsEventSection } from "./example-sections/constants"

interface ExampleSectionProps extends AnalyticsEventSection {
  innerRef: Ref<HTMLDivElement>
  children: React.ReactNode
  specLink?: string
}

const ExampleSection: React.FC<ExampleSectionProps> = ({
  title,
  children,
  innerRef,
  type,
  specLink,
}) => {
  const isHeader = type === "header"

  const handleClickSpec = () => {
    window.open(specLink, "_blank")
  }
  return (
    <Pane
      ref={innerRef}
      display="flex"
      flexDirection="column"
      marginBottom={majorScale(5)}
    >
      <Pane display="flex">
        <Heading size={isHeader ? 800 : 700}>{title}</Heading>
        {specLink && (
          <Button
            onClick={handleClickSpec}
            iconAfter={ShareIcon}
            appearance="minimal"
            marginLeft={majorScale(1)}
          >
            View full spec
          </Button>
        )}
      </Pane>
      <Pane>{children}</Pane>
    </Pane>
  )
}

export default ExampleSection
