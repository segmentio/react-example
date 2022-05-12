import React from "react"
import Navbar from "./NavBar"
import { Pane, majorScale } from "evergreen-ui"
import AnalyticsEventSection from "./ExampleSection"
import analyticsEventSections from "./example-sections/constants"
import TableOfContents from "./TableOfContents"
import useScrollIntoView from "./useScrollIntoView"
// UNCOMMENT FOR PACKAGE EXAMPLE
// import useAnalytics from "../analytics-package/useAnalytics"
import { pageViewed } from "../analytics-quick-start/analytics"

const App: React.FC = () => {
  const { getSectionRef, scrollIntoRefView } = useScrollIntoView()

  // UNCOMMENT FOR PACKAGE EXAMPLE
  // const { pageViewed } = useAnalytics()

  React.useEffect(() => {
    pageViewed("Home")
  }, [pageViewed])

  return (
    <Pane paddingBottom={majorScale(10)}>
      <Navbar />
      <Pane display="flex" justifyContent="center">
        <Pane
          width={majorScale(93)}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          {analyticsEventSections.map((section, i) => {
            const { title, example: Example, type, specLink } = section

            return (
              <AnalyticsEventSection
                key={i}
                innerRef={getSectionRef(i)}
                title={title}
                type={type}
                specLink={specLink}
              >
                {Example && <Example />}
              </AnalyticsEventSection>
            )
          })}
        </Pane>
        <TableOfContents onContentClick={scrollIntoRefView} />
      </Pane>
    </Pane>
  )
}

export default App
