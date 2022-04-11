import React from "react"
import {
  Pane,
  majorScale,
  UnorderedList,
  ListItem,
  Text,
  Link,
} from "evergreen-ui"

const TypesOfData: React.FC = () => (
  <Pane display="flex" flexDirection="column" marginTop={-majorScale(1)}>
    <Text>
      We generate and send these messages via a standard set of API calls, which
      each represent a distinct type of semantic information about a customer:
    </Text>
    <UnorderedList>
      <ListItem>Page: what web page are they on?</ListItem>
      <ListItem>Track: what are they doing?</ListItem>
      <ListItem>Identify: who is the customer?</ListItem>
      <ListItem>Group: what account or organization are they part of?</ListItem>
      <ListItem>Screen: what app screen are they on?</ListItem>
      <ListItem>Alias: what was their past identity?</ListItem>
    </UnorderedList>

    <Text marginTop={majorScale(2)}>
      We recommend the{" "}
      <Link href="https://segment.com/docs/connections/spec/" target="blank_">
        Segment Spec
      </Link>{" "}
      to provide guidance on meaningful data to capture, and the best format for
      it, across all of Segment’s libraries and APIs. If you implement Segment
      using these formats, it’s simple to translate your data to downstream
      tools.
    </Text>
  </Pane>
)

export default TypesOfData
