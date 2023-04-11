import { useCallback } from "react"
import { Industry } from "../shared/example-sections/group/types"
import useAnalyticsContext from "./analytics-context/useAnalyticsContext"
import { toaster } from "evergreen-ui"

const useAnalytics = () => {
  const { analytics } = useAnalyticsContext()

  const pageViewed = useCallback(
    (name: string, category = "App") => {
      analytics.page(category, name)
    },
    [analytics]
  )

  const trackButtonClicked = useCallback(
    (title: string) => {
      analytics.track("Button Clicked", {
        title,
      })
      toaster.success("Track call fired")
    },
    [analytics]
  )

  const identifyUser = useCallback(
    (name: string) => {
      analytics.identify({
        name,
      })
      toaster.success("Identify call fired")
    },
    [analytics]
  )

  const groupUser = useCallback(
    (industry: Industry) => {
      analytics.group(`${industry} Group ID`, { industry })
      toaster.success("Group call fired")
    },
    [analytics]
  )

  return {
    pageViewed,
    trackButtonClicked,
    identifyUser,
    groupUser,
  }
}

export default useAnalytics
