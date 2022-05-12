import React from "react"
import { Pane, majorScale, Text, Link, Image, Alert } from "evergreen-ui"
import DebuggerImage from "./Debugger.png"
import { identifyUser } from "../../../analytics-quick-start/analytics"
import FormField from "../../FormField"

const Identify: React.FC = () => {
  // UNCOMMENT FOR PACKAGE EXAMPLE
  // import useAnalytics from "../../../analytics-package/useAnalytics"
  return (
    <Pane display="flex" flexDirection="column">
      <Text marginTop={majorScale(1)} marginBottom={majorScale(4)}>
        analytics.identify()
      </Text>
      <Text marginBottom={majorScale(3)}>
        The Identify call ties users to their actions and records traits
        about them. It includes a unique User ID and any optional traits you
        know about the user, like their email, name, etc.
      </Text>

      <Pane
        background="tint1"
        paddingTop={majorScale(4)}
        paddingBottom={majorScale(2)}
        paddingX={majorScale(4)}
        display="flex"
        flexDirection="column"
      >
        <Text marginBottom={majorScale(3)}>Enter a name in this field:</Text>
        <FormField
          onFormSubmit={identifyUser}
          placeholder="Jane Doe"
          isCompact={true}
        />
      </Pane>

      <Text marginY={majorScale(3)}>
        When you click the button, a basic{" "}
        <Link
          href="https://segment.com/docs/connections/spec/identify/"
          target="blank_"
        >
          Identify
        </Link>{" "}
        call is fired and sent to the Source debugger.
      </Text>

      <Image
        maxWidth="75%"
        src={DebuggerImage}
        alt="Debugger with identify() call"
      />
      <Alert
        marginTop={majorScale(3)}
        intent="none"
        title={
          <Text>
            Identify events require a{" "}
            <Link
              href="https://segment.com/docs/connections/spec/identify/#identities"
              target="blank_"
            >
              user or anonymous ID
            </Link>
            . Segment’s browser and mobile libraries use Anonymous IDs
            by default to keep track of users as they navigate around your
            website or app, so in this case, you don’t specify an additional identifier.
          </Text>
        }
      />
    </Pane>
  )
}

export default Identify
