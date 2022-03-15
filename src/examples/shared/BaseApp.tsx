import React from "react"
import Navbar from "./NavBar"
import { Pane, majorScale } from "evergreen-ui"
import Header from "./Header"
import AnalyticsEventSection from "./ExampleSection"
import analyticsEventSections from "./example-sections/constants"
import TableOfContents from "./TableOfContents"
import useScrollIntoView from "./useScrollIntoView"
// import useAnalytics from "../analytics-package/useAnalytics"
import { pageViewed } from "../analytics-quick-start/analytics"

const App: React.FC = () => {
  const { getSectionRef, scrollIntoRefView } = useScrollIntoView()

  // const { pageViewed } = useAnalytics()

  React.useEffect(() => {
    pageViewed("Home")
  }, [pageViewed])

  return (
    <Pane paddingBottom={majorScale(20)}>
      <Navbar />
      <Pane paddingX={majorScale(30)}>
        <Header />
        <TableOfContents onContentClick={scrollIntoRefView} />
        {analyticsEventSections.map((section, i) => {
          const { title, description, children: Example } = section

          return (
            <AnalyticsEventSection
              key={i}
              innerRef={getSectionRef(i)}
              title={title}
              description={description}
            >
              {Example && <Example />}
            </AnalyticsEventSection>
          )
        })}
      </Pane>
    </Pane>
  )
}

export default App
