import { AnalyticsSnippet } from "@segment/analytics-next"

export interface AnalyticsWindow extends Window {
  analytics: AnalyticsSnippet
}
