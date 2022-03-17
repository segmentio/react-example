import { useCallback } from "react"
import { Industry } from "../shared/example-sections/more-examples-group/types"
import {
  ShirtColor,
  ShirtSize,
} from "../shared/example-sections/more-examples-track/types"
import useAnalyticsContext from "./analytics-context/useAnalyticsContext"

const useAnalytics = () => {
  const { analytics } = useAnalyticsContext()

  const pageViewed = useCallback(
    (name: string, category = "App") => {
      analytics?.page(category, name)
    },
    [analytics]
  )

  const trackButtonClicked = useCallback(
    (title: string) => {
      analytics?.track("Button Clicked", {
        title,
      })
    },
    [analytics]
  )

  const identifyUser = useCallback(
    (name: string) => {
      analytics?.identify({
        name,
      })
    },
    [analytics]
  )

  const trackProductAdded = useCallback(
    ({ color, size }: { color: ShirtColor; size: ShirtSize }) => {
      analytics?.track("Product Added", {
        name: "shirt example",
        color,
        size,
      })
    },
    [analytics]
  )

  const groupUser = useCallback(
    (industry: Industry) => {
      analytics?.group(`${industry} Group ID`, { industry })
    },
    [analytics]
  )

  return {
    pageViewed,
    trackButtonClicked,
    identifyUser,
    trackProductAdded,
    groupUser,
  }
}

export default useAnalytics
