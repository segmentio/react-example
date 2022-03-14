import React, { useState, useEffect } from "react"
import { AnalyticsBrowser, Analytics } from "@segment/analytics-next"
import { AnalyticsContext } from "./context"

interface AnalyticsProviderProps {
  children: React.ReactNode
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
  children,
}) => {
  const WRITE_KEY = process.env.REACT_APP_SEGMENT_WRITE_KEY

  const [analytics, setAnalytics] = useState<Analytics | undefined>(undefined)

  const loadAnalytics = async () => {
    const analyticsJsLoaded = Boolean(analytics)
    if (!WRITE_KEY || analyticsJsLoaded) {
      return
    }

    const [response] = await AnalyticsBrowser.load({ writeKey: WRITE_KEY })
    setAnalytics(response)
  }

  useEffect(() => {
    loadAnalytics()
  }, [WRITE_KEY, analytics])

  return (
    <AnalyticsContext.Provider value={{ analytics }}>
      {children}
    </AnalyticsContext.Provider>
  )
}
