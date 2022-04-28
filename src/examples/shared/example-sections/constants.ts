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

export interface AnalyticsEventSection {
  type?: "header" | "body"
  title: string
  description?: string
  example?: React.FC
}

const analyticsEventSections: AnalyticsEventSection[] = [
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
    description: "analytics.page()",
    example: Page,
  },
  {
    title: "Track calls",
    description: "analytics.track()",
    example: Track,
  },
  {
    title: "Identify calls",
    description: "analytics.identify()",
    example: Identify,
  },
  {
    title: "Group calls",
    description: "analytics.group()",
    example: Group,
  },

  {
    title: "More examples: B2B SaaS",
    type: "header",
    description:
      "Most B2B SaaS companies have a few common, core lifecycle events for users and accounts. We understand that account hierarchies can be unique and complex, but by following this spec you can take advantage of account-based tools on Segment platform, and B2B SaaS data products by Segment.",
    example: MoreExamplesB2BSaaS,
  },
  {
    title: "Account Created",
    example: AccountCreatedExample,
  },
  {
    title: "Invite Sent",
    example: InviteSentExample,
  },
  {
    title: "Trial Started",
    example: TrialStartedExample,
  },
  {
    title: "More examples: eCommerce",
    type: "header",
    description:
      "Segment’s eCommerce spec helps define the journey for a customer as they browse your store, click on promotions, view products, add those products to a cart, and complete a purchase.",
    example: MoreExamplesECommerce,
  },
  {
    title: "Product Added",
    example: ProductAddedExample,
  },
  {
    title: "Product Searched",
    example: ProductSearchedExample,
  },
  {
    title: "Product Viewed",
    example: ProductViewedExample,
  },
  {
    title: "Promotion Clicked",
    example: PromotionClickedExample,
  },
]

export default analyticsEventSections
