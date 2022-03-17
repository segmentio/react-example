import React from "react"
import { Pane, majorScale, Link } from "evergreen-ui"
import analyticsEventSections from "./example-sections/constants"

const TableOfContents: React.FC<{
  onContentClick: (index: number) => void
}> = ({ onContentClick }) => {
  const contents = analyticsEventSections.map((section) => section.title)

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
