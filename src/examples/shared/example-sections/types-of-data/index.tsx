import React from "react"
import {
  Pane,
  majorScale,
  UnorderedList,
  ListItem,
  Text,
  Link,
} from "evergreen-ui"
import { capitalize } from "lodash"

type EventType = "track" | "identify" | "group" | "page" | "screen" | "alias"

const getDocLink = (event: EventType) =>
  `https://segment.com/docs/connections/spec/${event}/`

type EventSection = {
  [eventType in EventType]: { description: string; docLink: string }
}
const eventSections: EventSection = {
  track: {
    description: "what are they doing?",
    docLink: getDocLink("track"),
  },

  page: {
    description: "what web page are they on?",
    docLink: getDocLink("track"),
  },

  identify: {
    description: "who is the customer?",
    docLink: getDocLink("track"),
  },

  group: {
    description: "what account or organization are they part of?",
    docLink: getDocLink("track"),
  },

  screen: {
    description: "what app screen are they on?",
    docLink: getDocLink("track"),
  },

  alias: {
    description: "what was their past identity?",
    docLink: getDocLink("alias"),
  },
}

const TypesOfData: React.FC = () => (
  <Pane display="flex" flexDirection="column">
    <Text marginTop={majorScale(4)}>
      Segment generates and sends messages to our tracking API based on the code
      you add to your website, mobile app or server.
    </Text>
    <Text marginTop={majorScale(2)}>
      We generate and send these messages via a standard set of API calls, which
      each represent a distinct type of semantic information about a customer:
    </Text>
    <UnorderedList>
      {Object.keys(eventSections).map((eventType) => {
        const section = eventSections[eventType as EventType]
        return (
          <ListItem key={eventType}>
            <Link href={section.docLink}>{capitalize(eventType)}</Link>:{" "}
            {section.description}
          </ListItem>
        )
      })}
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
