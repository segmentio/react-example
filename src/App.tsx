import React from "react"
import "./App.css"
import Navbar from "./examples/components/NavBar"
import { Pane, majorScale } from "evergreen-ui"
import Header from "./examples/components/Header"
import AnalyticsEventSection from "./examples/components/ExampleSection"
import SourceWriteKeyExample from "./examples/components/example-sections/source-write-key"

const App: React.FC = () => {
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
            </Pane>
        </Pane>
    )
}

export default App
