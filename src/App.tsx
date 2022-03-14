import React from "react"
import "./App.css"
import Navbar from "./examples/components/NavBar"
import { Pane, majorScale } from "evergreen-ui"
import Header from "./examples/components/Header"

const App: React.FC = () => {
    return (
        <Pane>
            <Navbar/>
            <Pane paddingX={majorScale(3)}>
                <Header />
            </Pane>
        </Pane>
    )
}

export default App
