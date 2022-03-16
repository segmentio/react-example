import SourceWriteKeyExample from "./example-sections/source-write-key"
import PageExample from "./example-sections/page"
import React from "react"
import TrackExample from "./example-sections/track"
import IdentifyExample from "./example-sections/identify"
import PuttingItAllTogetherExample from "./example-sections/putting-it-all-together"
import MoreExamplesTrack from "./example-sections/more-examples-track"
import MoreExamplesGroup from "./example-sections/more-examples-group"

interface AnalyticsEventSection {
  title: string
  description: string
  children?: React.FC
}

const analyticsEventSections: AnalyticsEventSection[] = [
  {
    title: "The Source Write Key",
    description:
      "You must first set up this Source in order to see events flowing through your debugger.",
    children: SourceWriteKeyExample,
  },
  {
    title: "analytics.page()",
    description:
      "The Page call lets you record whenever a user sees a page of your website, along with any optional properties about the page.",
    children: PageExample,
  },
  {
    title: "analytics.track()",
    description:
      "The Track call is how you record any actions your users perform, along with any properties that describe the action.",
    children: TrackExample,
  },
  {
    title: "analytics.identify()",
    description:
      "The Identify call lets you tie a user to their actions and record traits about them. It includes a unique User ID and any optional traits you know about the user, like their email, name, etc.",
    children: IdentifyExample,
  },
  {
    title: "Putting it all together",
    description:
      "You can use Track and Identify to understand who is doing what.",
    children: PuttingItAllTogetherExample,
  },
  {
    title: "More examples: analytics.track()",
    description: "Product added to cart",
    children: MoreExamplesTrack,
  },
  {
    title: "More examples: analytics.group()",
    description:
      "The Group call is how you associate an individual user with a group—be it a company, organization, account, project, etc.",
    children: MoreExamplesGroup,
  },
]

export default analyticsEventSections
