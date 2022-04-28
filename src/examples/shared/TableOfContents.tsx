import React from "react"
import {
  Pane,
  majorScale,
  Link,
  Heading,
  GitRepoIcon,
  ManualIcon,
  Text,
  minorScale,
} from "evergreen-ui"
import analyticsEventSections from "./example-sections/constants"

const TableOfContents: React.FC<{
  onContentClick: (index: number) => void
}> = ({ onContentClick }) => {
  const handleClickExternalLink = (link: string) => {
    window.open(link, "_blank")
  }
  return (
    <Pane>
      <Pane
        width={majorScale(24)}
        marginLeft={majorScale(8)}
        position="sticky"
        top="0"
      >
        <Pane
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          paddingBottom={majorScale(5)}
        >
          <Pane
            marginBottom={minorScale(3)}
            display="flex"
            alignItems="center"
            cursor="pointer"
            onClick={() =>
              handleClickExternalLink(
                "https://github.com/segmentio/react-example"
              )
            }
          >
            <GitRepoIcon marginRight={minorScale(1)} color="muted" />
            <Text color="muted">Github Repository</Text>
          </Pane>
          <Pane
            display="flex"
            alignItems="center"
            cursor="pointer"
            onClick={() => handleClickExternalLink("https://segment.com/docs/")}
          >
            <ManualIcon marginRight={minorScale(1)} color="muted" />
            <Text color="muted">Segment Documentation</Text>
          </Pane>
        </Pane>
        <Pane
          display="flex"
          flexDirection="column"
          paddingTop={majorScale(5)}
          borderTop
        >
          <Heading size={400} marginBottom={majorScale(1)}>
            On this site
          </Heading>
          {analyticsEventSections.map((eventSection, i) => {
            const { title, type } = eventSection
            return (
              <Link
                key={i}
                cursor="pointer"
                onClick={() => {
                  onContentClick(i)
                }}
                marginTop={i === 0 ? undefined : majorScale(1)}
                marginLeft={
                  type === "header" || type === "page header"
                    ? undefined
                    : majorScale(2)
                }
                color="neutral"
              >
                {title}
              </Link>
            )
          })}
        </Pane>
      </Pane>
    </Pane>
  )
}

export default TableOfContents
