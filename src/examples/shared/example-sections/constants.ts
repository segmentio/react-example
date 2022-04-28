import SourceWriteKey from "./source-write-key"
import Page from "./page"
import React from "react"
import Track from "./track"
import Identify from "./identify"
import Group from "./group"
import TypesOfData from "./types-of-data"
import { MoreExamplesB2BSaaS, MoreExamplesECommerce } from "./more-examples"
import ProductAddedExample from "./more-examples/ProductAddedExample"
import ProductSearchedExample from "./more-examples/ProductSearchedExample"
import ProductViewedExample from "./more-examples/ProductViewedExample"
import PromotionClickedExample from "./more-examples/PromotionClickedExample"
import AccountCreatedExample from "./more-examples/AccountCreatedExample"
import InviteSentExample from "./more-examples/InviteSentExample"
import TrialStartedExample from "./more-examples/TrialStartedExample"
import Header from "../Header"

export interface AnalyticsEventSection {
  type?: "header" | "body" | "page header"
  title: string
  example?: React.FC
  specLink?: string
}

const analyticsEventSections: AnalyticsEventSection[] = [
  {
    title: "Welcome to our example site!",
    type: "page header",
    example: Header,
  },
  {
    title: "Set this site up as a Source",
    type: "header",
    example: SourceWriteKey,
  },
  {
    title: "Types of data",
    type: "header",
    example: TypesOfData,
  },
  {
    title: "Page calls",
    example: Page,
  },
  {
    title: "Track calls",
    example: Track,
  },
  {
    title: "Identify calls",
    example: Identify,
  },
  {
    title: "Group calls",
    example: Group,
  },

  {
    title: "More examples: B2B SaaS",
    type: "header",
    example: MoreExamplesB2BSaaS,
    specLink: "https://segment.com/docs/connections/spec/b2b-saas/",
  },
  {
    title: "Account Created",
    example: AccountCreatedExample,
    specLink:
      "https://segment.com/docs/connections/spec/b2b-saas/#account-created",
  },
  {
    title: "Invite Sent",
    example: InviteSentExample,
    specLink: "https://segment.com/docs/connections/spec/b2b-saas/#invite-sent",
  },
  {
    title: "Trial Started",
    example: TrialStartedExample,
    specLink:
      "https://segment.com/docs/connections/spec/ecommerce/v2/#promotion-clicked",
  },
  {
    title: "More examples: eCommerce",
    type: "header",
    example: MoreExamplesECommerce,
    specLink: "https://segment.com/docs/connections/spec/ecommerce/",
  },
  {
    title: "Product Added",
    example: ProductAddedExample,
    specLink:
      "https://segment.com/docs/connections/spec/ecommerce/v2/#product-added",
  },
  {
    title: "Product Searched",
    example: ProductSearchedExample,
    specLink:
      "https://segment.com/docs/connections/spec/ecommerce/v2/#products-searched",
  },
  {
    title: "Product Viewed",
    example: ProductViewedExample,
    specLink:
      "https://segment.com/docs/connections/spec/ecommerce/v2/#product-viewed",
  },
  {
    title: "Promotion Clicked",
    example: PromotionClickedExample,
    specLink:
      "https://segment.com/docs/connections/spec/ecommerce/v2/#promotion-clicked",
  },
]

export default analyticsEventSections
