import { AnalyticsWindow } from "./types"
declare let window: AnalyticsWindow

const { analytics } = window

export const pageViewed = (name: string, category = "App") => {
  analytics.page(category, name)
}

export const tableOfContentsItemClicked = (title: string) => {
  analytics.track("Table of Contents Item Clicked", {
    title,
  })
}
