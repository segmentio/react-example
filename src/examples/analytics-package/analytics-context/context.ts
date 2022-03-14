import { Analytics } from "@segment/analytics-next"
import { createContext } from "react"

export interface AnalyticsContextProps {
    analytics: Analytics | undefined
}

const defaultAnalyticsContext = {
    analytics: undefined,
}

export const AnalyticsContext = createContext<AnalyticsContextProps>(defaultAnalyticsContext)
