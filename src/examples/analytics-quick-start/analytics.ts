import { Industry } from "../shared/example-sections/more-examples-group/types"
import {
  ShirtColor,
  ShirtSize,
} from "../shared/example-sections/more-examples-track/types"
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

export const trackButtonClicked = (title: string) => {
  analytics.track("Button Clicked", {
    title,
  })
}

export const identifyUser = (name: string) => {
  analytics.identify({
    name,
  })
}

export const trackProductAdded = ({
  color,
  size,
}: {
  color: ShirtColor
  size: ShirtSize
}) => {
  analytics.track("Product Added", {
    name: "shirt example",
    color,
    size,
  })
}

export const groupUser = (industry: Industry) => {
  analytics.group(`${industry} Group ID`, { industry })
}
