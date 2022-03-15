import React from "react"
import { Pane, majorScale, Link } from "evergreen-ui"
import analyticsEventSections from "./example-sections/constants"
import { tableOfContentsItemClicked } from "../analytics-quick-start/analytics"
// UNCOMMENT FOR PACKAGE EXAMPLE
// import useAnalytics from "../analytics-package/useAnalytics"

const TableOfContents: React.FC<{
  onContentClick: (index: number) => void
}> = ({ onContentClick }) => {
  const contents = analyticsEventSections.map((section) => section.title)
  // UNCOMMENT FOR PACKAGE EXAMPLE
  // const { tableOfContentsItemClicked } = useAnalytics()
  return (
    <Pane
      display="flex"
      flexDirection="column"
      paddingY={majorScale(4)}
      borderBottom
    >
      {contents.map((title, i) => {
        return (
          <Link
            key={i}
            cursor="pointer"
            onClick={() => {
              tableOfContentsItemClicked(title)
              onContentClick(i)
            }}
            marginTop={majorScale(1)}
          >
            {title}
          </Link>
        )
      })}
    </Pane>
  )
}

export default TableOfContents
