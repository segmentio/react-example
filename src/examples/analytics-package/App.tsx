import React from "react"
import { AnalyticsProvider } from "./analytics-context"
import BaseApp from "../shared/BaseApp"

const App: React.FC = () => {
  return (
    <AnalyticsProvider>
      <BaseApp />
    </AnalyticsProvider>
  )
}

export default App
