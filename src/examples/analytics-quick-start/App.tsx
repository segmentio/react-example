import React, { useEffect, useRef } from "react"
import Navbar from "../shared/NavBar"
import { Pane, majorScale } from "evergreen-ui"
import Header from "../shared/Header"
import AnalyticsEventSection from "../shared/ExampleSection"
import { AnalyticsWindow } from "./types"
import analyticsEventSections from "../shared/example-sections/constants"
import TableOfContents from "../shared/TableOfContents"

declare let window: AnalyticsWindow

const App: React.FC = () => {
    const { analytics } = window
    useEffect(() => {
        analytics.page("App", "Home")
    }, [])

    const sectionRefs = analyticsEventSections.map(section => ({ title: section.title, ref: useRef<HTMLDivElement>(null) }))

    const handleNavContentClick = (index: number) => {
        const sectionRef = sectionRefs[index]
        sectionRef.ref.current?.scrollIntoView()
    }

    return (
        <Pane paddingBottom={majorScale(20)}>
            <Navbar/>
            <Pane paddingX={majorScale(30)}>
                <Header />
                <TableOfContents onContentClick={handleNavContentClick} />
                {analyticsEventSections.map((section, i) => {
                    const { title, description, children: Example } = section

                    return (
                        <AnalyticsEventSection 
                            key={i}
                            innerRef={sectionRefs[i].ref}
                            title={title}
                            description={description}>{Example && <Example/>}
                        </AnalyticsEventSection>
                    )})}
            </Pane>
        </Pane>
    )
}

export default App
