import { Analytics } from "@segment/analytics-next"

export interface AnalyticsWindow extends Window {
  analytics: Analytics
}
