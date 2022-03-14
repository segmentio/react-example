import React, { useEffect } from "react"
import { AnalyticsProvider } from "./analytics-context"
import useAnalytics from "./useAnalytics"
import BaseApp from "../shared/App"


const App: React.FC = () => {
    const { homePageViewed } = useAnalytics()

    useEffect(() => {
        homePageViewed() 
    }, [homePageViewed])

    return (
        <AnalyticsProvider>
            <BaseApp />
        </AnalyticsProvider>     
    )
}

export default App
