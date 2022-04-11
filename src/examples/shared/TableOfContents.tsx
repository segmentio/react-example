import React from "react"
import { Pane, majorScale, Link } from "evergreen-ui"
import analyticsEventSections from "./example-sections/constants"

const TableOfContents: React.FC<{
  onContentClick: (index: number) => void
}> = ({ onContentClick }) => {
  return (
    <Pane
      display="flex"
      flexDirection="column"
      paddingY={majorScale(4)}
      borderBottom
    >
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
            marginLeft={type === "header" ? undefined : majorScale(2)}
          >
            {title}
          </Link>
        )
      })}
    </Pane>
  )
}

export default TableOfContents
