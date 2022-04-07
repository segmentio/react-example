import SourceWriteKey from "./source-write-key"
import Page from "./page"
import React from "react"
import Track from "./track"
import Identify from "./identify"
import PuttingItAllTogether from "./putting-it-all-together"
import ProductAdded from "./product-added"
import MoreExamplesGroup from "./more-examples-group"
import TypesOfData from "./types-of-data"

export interface AnalyticsEventSection {
  type?: "header" | "body"
  title: string
  description: string
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
    example: MoreExamplesGroup,
  },
  {
    type: "header",
    title: "Putting it all together",
    description:
      "You can use Track and Identify to understand who is doing what.",
    example: PuttingItAllTogether,
  },
  {
    title: "More examples: B2B SaaS",
    type: "header",
    description:
      "Most B2B SaaS companies have a few common, core lifecycle events for users and accounts. We understand that account hierarchies can be unique and complex, but by following this spec you can take advantage of account-based tools on Segment platform, and B2B SaaS data products by Segment.",
  },
  {
    title: "Product Added",
    description: "",
    example: ProductAdded,
  },
]

export default analyticsEventSections
