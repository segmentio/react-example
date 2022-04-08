import { toaster } from "evergreen-ui"
import { Industry } from "../shared/example-sections/group/types"
import {
  ShirtColor,
  ShirtSize,
} from "../shared/example-sections/more-examples/ProductAddedExample"
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
    name: "Basic Shirt",
    color,
    size,
  })
  toaster.success("Product Added Track call fired")
}

export const trackProductSearched = (formValue: string) => {
  window.analytics.track("Product Searched", {
    query: formValue,
  })
  toaster.success("Product Searched Track call fired")
}

export const trackProductViewed = ({
  title,
  author,
}: {
  title: string
  author: string
}) => {
  window.analytics.track("Product Viewed", {
    title,
    author,
  })
  toaster.success("Product Viewed Track call fired")
}

export const trackPromotionClicked = (percentage: string) => {
  window.analytics.track("Promotion Clicked", {
    promotion_id: "promo_1",
    creative: "button_example",
    name: `${percentage}_off_next_order`,
    position: "ecommerce_examples",
  })

  toaster.success("Promotion Clicked Track call fired")
}

export const groupUser = (industry: Industry) => {
  window.analytics.group(`${industry} Group ID`, { industry })
  toaster.success("Group call fired")
}
