import React, { useMemo } from "react"
import { AnalyticsBrowser } from "@segment/analytics-next"
import { AnalyticsContext, AnalyticsContextProps } from "./context"

interface AnalyticsProviderProps {
  children: React.ReactNode
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
  children,
}) => {
  const writeKey = process.env.REACT_APP_SEGMENT_WRITE_KEY ?? ""

  const value: AnalyticsContextProps = useMemo(
    () => ({ analytics: AnalyticsBrowser.load({ writeKey }) }),
    [writeKey]
  )

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  )
}
