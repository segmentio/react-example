import { toaster } from "evergreen-ui"
import { Industry } from "../shared/example-sections/group/types"
import {
  ShirtColor,
  ShirtSize,
} from "../shared/example-sections/product-added/types"
import { AnalyticsWindow } from "./types"

declare let window: AnalyticsWindow

export const pageViewed = (name: string, category = "App") => {
  window.analytics.page(category, name)
}

export const trackButtonClicked = (title: string) => {
  window.analytics.track("Button Clicked", {
    title,
  })
  toaster.success("Track call fired")
}

export const identifyUser = (name: string) => {
  window.analytics.identify({
    name,
  })
  toaster.success("Identify call fired")
}

export const trackProductAdded = ({
  color,
  size,
}: {
  color: ShirtColor
  size: ShirtSize
}) => {
  window.analytics.track("Product Added", {
    name: "shirt example",
    color,
    size,
  })
  toaster.success("Product Added Track call fired")
}

export const groupUser = (industry: Industry) => {
  window.analytics.group(`${industry} Group ID`, { industry })
  toaster.success("Group call fired")
}
