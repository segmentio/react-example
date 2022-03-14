import { AnalyticsWindow } from "./types"
declare let window: AnalyticsWindow

const { analytics } = window

export const homePageViewed = () => {
    /**
     * Whenever this page is loaded, we fire a page() call.
     * More information [here](https://segment.com/docs/connections/spec/page/)
     */
    analytics.page("App", "Home")
}

export const tableOfContentsItemClicked = (title: string) => {
    analytics.track("Table of Contents Item Clicked", {
        title
    })
}