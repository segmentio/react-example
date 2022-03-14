import React, { useRef } from "react"
import Navbar from "../shared/NavBar"
import { Pane, majorScale } from "evergreen-ui"
import Header from "../shared/Header"
import AnalyticsEventSection from "../shared/ExampleSection"
import analyticsEventSections from "../shared/example-sections/constants"
import TableOfContents from "../shared/TableOfContents"
import { AnalyticsProvider } from "./analytics-context"


const App: React.FC = () => {
    const sectionRefs = analyticsEventSections.map(section => ({ title: section.title, ref: useRef<HTMLDivElement>(null) }))

    const handleNavContentClick = (index: number) => {
        const sectionRef = sectionRefs[index]
        sectionRef.ref.current?.scrollIntoView()
    }

    return (
        <AnalyticsProvider>
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
        </AnalyticsProvider>     
    )
}

export default App
