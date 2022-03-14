import React from "react"
import "./App.css"
import Navbar from "./examples/components/NavBar"
import { Pane } from "evergreen-ui"

const App: React.FC = () => {
    return (
        <Pane>
            <Navbar/>
        </Pane>
    )
}

export default App
