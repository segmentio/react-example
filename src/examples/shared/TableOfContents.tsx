import React from "react"
import { Pane, majorScale, Link } from "evergreen-ui"
import analyticsEventSections from "./example-sections/constants"
// import { tableOfContentsItemClicked } from "../analytics-quick-start/analytics"
import useAnalytics from "../analytics-package/useAnalytics"

const TableOfContents: React.FC<{onContentClick: (index: number) => void}> = ({ onContentClick }) => {
    const { tableOfContentsItemClicked } = useAnalytics()
    const contents = analyticsEventSections.map(section => section.title)
    return (
        <Pane 
            display="flex"
            flexDirection="column"
            paddingY={majorScale(4)}
            borderBottom={"1px solid grey"}
        >
            {contents.map((title, i) => {
                return <Link key={i}
                    cursor="pointer"
                    onClick={() => {
                        tableOfContentsItemClicked(title)
                        onContentClick(i)
                    }}
                    marginTop={majorScale(1)}
                >{title}</Link>
            })}
        </Pane>
    )}

export default TableOfContents