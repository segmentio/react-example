import { toaster } from "evergreen-ui"
import { Industry } from "../shared/example-sections/group/types"
import {
  ShirtColor,
  ShirtSize,
} from "../shared/example-sections/more-examples/ProductAddedExample"
import { AnalyticsWindow } from "./types"

declare let window: AnalyticsWindow

/**
 * Basic Analytics calls
 */
export const pageViewed = (name: string, category = "App") => {
  window.analytics.page(category, name)
  toaster.success("Page call fired")
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

export const groupUser = (industry: Industry) => {
  window.analytics.group(`${industry} Group ID`, { industry })
  toaster.success("Group call fired")
}

/**
 * B2B SaaS calls
 */
export const trackAccountCreated = (accountName: string) => {
  const eventName = "Account Created"
  window.analytics.track(eventName, {
    account_name: accountName,
  })
  toaster.success(`${eventName} Track call fired`)
}

export const defaultInviteSentProperties = {
  invitee_first_name: "FIRST_NAME",
  invitee_last_name: "LAST_NAME",
  invitee_role: "ROLE",
}
export const trackInviteSent = (email: string) => {
  const eventName = "Invite Sent"
  window.analytics.track(eventName, {
    invitee_email: email,
    ...defaultInviteSentProperties,
  })
  toaster.success(`${eventName} Track call fired`)
}

export const defaultTrialStartedProperties = {
  trial_end_date: "END_DATE",
  trial_plan_name: "PLAN NAME",
}
export const trackTrialStarted = (startDate: string) => {
  const eventName = "Trial Started"
  window.analytics.track(eventName, {
    trial_start_date: startDate,
    ...defaultTrialStartedProperties,
  })
  toaster.success(`${eventName} Track call fired`)
}

/**
 * eCommerce Analytics calls
 */
export const defaultProductAddedProperties = {
  cart_id: "CART_ID",
  product_id: "PRODUCT_ID",
  sku: "SKU",
  category: "CATEGORY",
  name: "Basic Shirt",
  brand: "BRAND",
  price: 18.99,
  quantity: 1,
  coupon: "COUPON",
  url: "https://www.example.com/product/path",
  image_url: "https://www.example.com/product/path.jpg",
}
export const trackProductAdded = ({
  color,
  size,
}: {
  color: ShirtColor
  size: ShirtSize
}) => {
  const eventName = "Product Added"
  window.analytics.track(eventName, {
    variant: color,
    size,
    ...defaultProductAddedProperties,
  })
  toaster.success(`${eventName} Track call fired`)
}

export const trackProductSearched = (formValue: string) => {
  const eventName = "Product Searched"
  window.analytics.track(eventName, {
    query: formValue,
  })
  toaster.success(`${eventName} Track call fired`)
}

export const defaultProductViewedProperties = {
  product_id: "PRODUCT_ID",
  sku: "SKU",
  category: "Books",
  variant: "VARIANT",
  price: 18.99,
  quantity: 1,
  coupon: "COUPON",
  currency: "USD",
  value: 18.99,
  url: "https://www.example.com/product/path",
  image_url: "https://www.example.com/product/path.jpg",
}
export const trackProductViewed = ({
  title,
  author,
}: {
  title: string
  author: string
}) => {
  const eventName = "Product Viewed"
  window.analytics.track(eventName, {
    title,
    author,
    ...defaultProductViewedProperties,
  })
  toaster.success(`${eventName} Track call fired`)
}

export const defaultPromotionClickedProperties = {
  promotion_id: "promo_1",
  creative: "button_example",
  position: "ecommerce_examples",
}
export const trackPromotionClicked = (percentage: string) => {
  const eventName = "Promotion Clicked"
  window.analytics.track(eventName, {
    name: `${percentage}_off_next_order`,
    ...defaultPromotionClickedProperties,
  })
  toaster.success(`${eventName} Track call fired`)
}
