import React from "react"
import { Pane, majorScale, Text, Link } from "evergreen-ui"

const PuttingItAllTogetherExample: React.FC = () => (
  <Pane display="flex" flexDirection="column">
    <Text marginTop={majorScale(1)}>
      With the Track call, you can attribute actions on your site or app to
      individuals, and gain a better understanding of their activities,
      identity, and use patterns over time.
    </Text>
    <Text fontStyle="italic" marginTop={majorScale(1)}>
      More information can be found{" "}
      <Link
        href="https://segment.com/docs/connections/spec/best-practices-identify/"
        target="blank_"
      >
        here
      </Link>
      .
    </Text>
  </Pane>
)

export default PuttingItAllTogetherExample
