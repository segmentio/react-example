import { toaster } from "evergreen-ui"
import { Industry } from "../shared/example-sections/more-examples-group/types"
import {
  ShirtColor,
  ShirtSize,
} from "../shared/example-sections/more-examples-track/types"
import { AnalyticsWindow } from "./types"

declare let window: AnalyticsWindow

const { analytics } = window

export const pageViewed = (name: string, category = "App") => {
  try {
    analytics.page(category, name)
  } catch (e) {
    handleError(e)
  }
}

export const trackButtonClicked = (title: string) => {
  try {
    analytics.track("Button Clicked", {
      title,
    })
    toaster.success("Track call fired")
  } catch (e) {
    handleError(e)
  }
}

export const identifyUser = (name: string) => {
  try {
    analytics.identify({
      name,
    })
    toaster.success("Identify call fired")
  } catch (e) {
    handleError(e)
  }
}

export const trackProductAdded = ({
  color,
  size,
}: {
  color: ShirtColor
  size: ShirtSize
}) => {
  try {
    analytics.track("Product Added", {
      name: "shirt example",
      color,
      size,
    })
    toaster.success("Product Added Track call fired")
  } catch (e) {
    handleError(e)
  }
}

export const groupUser = (industry: Industry) => {
  try {
    analytics.group(`${industry} Group ID`, { industry })
  } catch (e) {
    handleError(e)
  }
}

const handleError = (e: unknown) => {
  toaster.danger("There was an error in sending your analytics event.")

  if (e instanceof Error) {
    console.log("ERROR:", e.message)
  } else {
    console.log("ERROR:", String(e))
  }
}
