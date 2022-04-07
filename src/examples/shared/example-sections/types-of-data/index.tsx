import React from "react"
import { Pane, majorScale, UnorderedList, ListItem, Text } from "evergreen-ui"

const TypesOfData: React.FC = () => (
  <Pane
    display="flex"
    marginTop={-majorScale(1)}
    justifyContent="space-between"
  >
    <Pane display="flex" flexDirection="column">
      <Text>
        We generate and send these messages via a standard set of API calls,
        which each represent a distinct type of semantic information about a
        customer:
      </Text>
      <UnorderedList>
        <ListItem>Page: what web page are they on?</ListItem>
        <ListItem>Track: what are they doing?</ListItem>
        <ListItem>Identify: who is the customer?</ListItem>
        <ListItem>
          Group: what account or organization are they part of?
        </ListItem>
        <ListItem>Screen: what app screen are they on?</ListItem>
        <ListItem>Alias: what was their past identity?</ListItem>
      </UnorderedList>
    </Pane>
  </Pane>
)

export default TypesOfData
