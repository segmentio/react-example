import { useCallback } from "react"
import { Industry } from "../shared/example-sections/group/types"
import {
  ShirtColor,
  ShirtSize,
} from "../shared/example-sections/product-added/types"
import useAnalyticsContext from "./analytics-context/useAnalyticsContext"
import { toaster } from "evergreen-ui"

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
      toaster.success("Track call fired")
    },
    [analytics]
  )

  const identifyUser = useCallback(
    (name: string) => {
      analytics?.identify({
        name,
      })
      toaster.success("Identify call fired")
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
      toaster.success("Product Added Track call fired")
    },
    [analytics]
  )

  const groupUser = useCallback(
    (industry: Industry) => {
      analytics?.group(`${industry} Group ID`, { industry })
      toaster.success("Group call fired")
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
