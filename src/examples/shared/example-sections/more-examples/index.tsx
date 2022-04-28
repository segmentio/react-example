import React from "react"
import { Pane, majorScale, Text } from "evergreen-ui"

export const MoreExamplesB2BSaaS: React.FC = () => (
  <Pane display="flex" flexDirection="column">
    <Text marginTop={majorScale(4)}>
      Most B2B SaaS companies have a few common, core lifecycle events for users
      and accounts. We understand that account hierarchies can be unique and
      complex, but by following this spec you can take advantage of
      account-based tools on Segment platform, and B2B SaaS data products by
      Segment.
    </Text>
    <Text marginTop={majorScale(1)}>
      We’ve included examples of common B2B Saas events to get you started.
    </Text>
  </Pane>
)

export const MoreExamplesECommerce: React.FC = () => (
  <Pane display="flex" flexDirection="column">
    <Text marginTop={majorScale(4)}>
      Segment’s eCommerce spec helps define the journey for a customer as they
      browse your store, click on promotions, view products, add those products
      to a cart, and complete a purchase.
    </Text>
    <Text marginTop={majorScale(1)}>
      We’ve included examples of common B2B Saas events to get you started.
    </Text>
  </Pane>
)
