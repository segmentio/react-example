import React, { useState, useEffect } from "react"
import { AnalyticsBrowser, Analytics } from "@segment/analytics-next"
import { AnalyticsContext } from "./context"

interface AnalyticsProviderProps {
    children: React.ReactNode
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
    const WRITE_KEY = process.env.REACT_APP_SEGMENT_WRITE_KEY

    const [analytics, setAnalytics] = useState<Analytics|undefined>(undefined)

    useEffect(() => {
        if (!WRITE_KEY) return
        const loadAnalytics = async () => {
            const [response] = await AnalyticsBrowser.load({ writeKey: WRITE_KEY })
            setAnalytics(response)
        }
        loadAnalytics()
    }, [WRITE_KEY])

    // eslint-disable-next-line react/jsx-no-constructed-context-values
    return <AnalyticsContext.Provider value={{ analytics }}>{children}</AnalyticsContext.Provider>
}
