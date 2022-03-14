import React, { useEffect } from "react"
import Navbar from "../shared/NavBar"
import { Pane, majorScale } from "evergreen-ui"
import Header from "../shared/Header"
import AnalyticsEventSection from "../shared/ExampleSection"
import { AnalyticsWindow } from "./types"
import analyticsEventSections from "../shared/example-sections/constants"
import TableOfContents from "../shared/TableOfContents"
import useScrollIntoView from "../shared/useScrollIntoView"

declare let window: AnalyticsWindow

const App: React.FC = () => {
    const { analytics } = window
    useEffect(() => {
        analytics.page("App", "Home")
    }, [])

    const [getSectionRef, scrollIntoRefView] = useScrollIntoView()

    return (
        <Pane paddingBottom={majorScale(20)}>
            <Navbar/>
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
                            description={description}>{Example && <Example/>}
                        </AnalyticsEventSection>
                    )})}
            </Pane>
        </Pane>
    )
}

export default App
