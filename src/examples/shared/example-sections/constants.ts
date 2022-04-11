import SourceWriteKey from "./source-write-key"
import Page from "./page"
import React from "react"
import Track from "./track"
import Identify from "./identify"
import PuttingItAllTogether from "./putting-it-all-together"
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
    title: "The Source Write Key",
    type: "header",
    description:
      "You must first set up this Source in order to see events flowing through your debugger.",
    example: SourceWriteKey,
  },
  {
    title: "Types of data",
    description:
      "Segment generates and sends messages to our tracking API based on the code you add to your website, mobile app or server.",
    type: "header",
    example: TypesOfData,
  },
  {
    title: "analytics.page()",
    description:
      "The Page call lets you record whenever a user sees a page of your website, along with any optional properties about the page.",
    example: Page,
  },
  {
    title: "analytics.track()",
    description:
      "The Track call is how you record any actions your users perform, along with any properties that describe the action.",
    example: Track,
  },
  {
    title: "analytics.identify()",
    description:
      "The Identify call lets you tie a user to their actions and record traits about them. It includes a unique User ID and any optional traits you know about the user, like their email, name, etc.",
    example: Identify,
  },
  {
    title: "analytics.group()",
    description:
      "The Group call is how you associate an individual user with a group—be it a company, organization, account, project, etc.",
    example: Group,
  },
  {
    type: "header",
    title: "Putting it all together",
    description:
      "Using Track and Identify together gives you a clear picture of who your user is and how they are interacting with your site or app.",
    example: PuttingItAllTogether,
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
