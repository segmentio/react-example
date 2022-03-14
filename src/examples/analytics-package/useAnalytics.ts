import useAnalyticsContext from "./analytics-context/useAnalyticsContext"

const useAnalytics = () => {
  const { analytics } = useAnalyticsContext()

  const homePageViewed = () => {
    /**
     * Whenever this page is loaded, we fire a page() call.
     * More information [here](https://segment.com/docs/connections/spec/page/)
     */
    analytics?.page("App", "Home")
  }

  const tableOfContentsItemClicked = (title: string) => {
    analytics?.track("Table of Contents Item Clicked", {
      title,
    })
  }

  return { homePageViewed, tableOfContentsItemClicked }
}

export default useAnalytics
