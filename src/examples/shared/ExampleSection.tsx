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
  const isPageHeader = type === "page header"

  let textSize = 700
  if (isPageHeader) {
    textSize = 900
  } else if (isHeader) {
    textSize = 800
  }

  const handleClickSpec = () => {
    window.open(specLink, "_blank")
  }
  return (
    <Pane
      ref={innerRef}
      display="flex"
      flexDirection="column"
      marginTop={majorScale(5)}
      width="100%"
      id={title}
    >
      <Pane display="flex">
        <Heading size={textSize}>{title}</Heading>
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
