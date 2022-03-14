import React, { useEffect } from "react"
import "./App.css"
import Navbar from "./examples/components/NavBar"
import { Pane, majorScale } from "evergreen-ui"
import Header from "./examples/components/Header"
import AnalyticsEventSection from "./examples/components/ExampleSection"
import SourceWriteKeyExample from "./examples/components/example-sections/source-write-key"
import PageExample from "./examples/components/example-sections/page"
import { AnalyticsWindow } from "./types"

declare let window: AnalyticsWindow

const App: React.FC = () => {
    const { analytics } = window
    useEffect(() => {
        // analytics.page("category", "name")
        analytics.page("App", "Home")
    }, [])
    return (
        <Pane>
            <Navbar/>
            <Pane paddingX={majorScale(3)}>
                <Header />
                <AnalyticsEventSection 
                    title="The Source Write Key"
                    description="You must first set up this Source in order to see events flowing through your debugger."
                >
                    <SourceWriteKeyExample/>
                </AnalyticsEventSection>
                <AnalyticsEventSection 
                    title="analytics.page()"
                    description="The page call lets you record whenever a user sees a page of your website, along with any optional properties about the page."
                >
                    <PageExample/>
                </AnalyticsEventSection>
            </Pane>
        </Pane>
    )
}

export default App
