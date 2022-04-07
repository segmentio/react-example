import { useCallback } from "react"
import { Industry } from "../shared/example-sections/more-examples-group/types"
import {
  ShirtColor,
  ShirtSize,
} from "../shared/example-sections/more-examples-track/types"
import useAnalyticsContext from "./analytics-context/useAnalyticsContext"
import { toaster } from "evergreen-ui"

const handleError = (e: unknown) => {
  toaster.danger("There was an error in sending your analytics event.")

  if (e instanceof Error) {
    console.log("ERROR:", e.message)
  } else {
    console.log("ERROR:", String(e))
  }
}

const useAnalytics = () => {
  const { analytics } = useAnalyticsContext()

  const pageViewed = useCallback(
    (name: string, category = "App") => {
      try {
        analytics?.page(category, name)
      } catch (e) {
        handleError(e)
      }
    },
    [analytics]
  )

  const trackButtonClicked = useCallback(
    (title: string) => {
      try {
        analytics?.track("Button Clicked", {
          title,
        })
        toaster.success("Track call fired")
      } catch (e) {
        handleError(e)
      }
    },
    [analytics]
  )

  const identifyUser = useCallback(
    (name: string) => {
      try {
        analytics?.identify({
          name,
        })
        toaster.success("Identify call fired")
      } catch (e) {
        handleError(e)
      }
    },
    [analytics]
  )

  const trackProductAdded = useCallback(
    ({ color, size }: { color: ShirtColor; size: ShirtSize }) => {
      try {
        analytics?.track("Product Added", {
          name: "shirt example",
          color,
          size,
        })
        toaster.success("Product Added Track call fired")
      } catch (e) {
        handleError(e)
      }
    },
    [analytics]
  )

  const groupUser = useCallback(
    (industry: Industry) => {
      try {
        analytics?.group(`${industry} Group ID`, { industry })
        toaster.success("Group call fired")
      } catch (e) {
        handleError(e)
      }
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
