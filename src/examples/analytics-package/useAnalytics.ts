import { useCallback } from "react"
import useAnalyticsContext from "./analytics-context/useAnalyticsContext"

const useAnalytics = () => {
  const { analytics } = useAnalyticsContext()
  
  const pageViewed = useCallback((name: string, category = "App") => {
    analytics?.page(category, name)
  }, [analytics])

  const tableOfContentsItemClicked = useCallback((title: string) => {
    analytics?.track("Table of Contents Item Clicked", {
      title,
    })
  }, [analytics])

  return { pageViewed, tableOfContentsItemClicked }
}

export default useAnalytics
