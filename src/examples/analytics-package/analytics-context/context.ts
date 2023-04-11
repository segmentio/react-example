import { AnalyticsBrowser } from "@segment/analytics-next"
import { createContext } from "react"

export interface AnalyticsContextProps {
  analytics: AnalyticsBrowser
}

const defaultAnalyticsContext = {
  analytics: new AnalyticsBrowser(),
}

export const AnalyticsContext = createContext<AnalyticsContextProps>(
  defaultAnalyticsContext
)
