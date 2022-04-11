import React from "react"
import { Pane, majorScale, Text, Link } from "evergreen-ui"

interface Props {
  type: "b2b" | "ecommerce"
}

const MoreExamples: React.FC<Props> = ({ type }) => {
  const isB2B = type === "b2b"
  let title = ""
  let url = ""

  if (isB2B) {
    title = "B2B Saas"
    url = "https://segment.com/docs/connections/spec/b2b-saas/"
  } else {
    title = "eCommerce"
    url = "https://segment.com/docs/connections/spec/ecommerce/v2/"
  }
  return (
    <Pane display="flex" flexDirection="column">
      <Text marginTop={majorScale(1)}>
        Below, we’ve included examples of common {title} events to get you
        started.
      </Text>
      <Link marginTop={majorScale(1)} href={url} target="blank_">
        View full {title} spec here.
      </Link>
    </Pane>
  )
}

export const MoreExamplesB2BSaaS: React.FC = () => <MoreExamples type="b2b" />

export const MoreExamplesECommerce: React.FC = () => (
  <MoreExamples type="ecommerce" />
)

export default MoreExamples
