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
  example?: React.FC
  specLink?: string
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
