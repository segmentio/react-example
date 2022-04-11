import React from "react"
import { Pane, majorScale, Text, Link, Image, minorScale } from "evergreen-ui"
import DebuggerImage from "./Debugger.png"
import { identifyUser } from "../../../analytics-quick-start/analytics"
import FormField from "../../FormField"

const Identify: React.FC = () => {
  // UNCOMMENT FOR PACKAGE EXAMPLE
  // import useAnalytics from "../../../analytics-package/useAnalytics"
  return (
    <Pane
      display="flex"
      marginTop={majorScale(2)}
      justifyContent="space-between"
    >
      <Pane display="flex" flexDirection="column" width="100%">
        <Pane
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignSelf="center"
          width="80%"
        >
          <Text marginBottom={minorScale(1)}>
            Enter a name in the form field.
          </Text>
          <FormField onFormSubmit={identifyUser} />
        </Pane>
        <Text marginTop={majorScale(2)}>
          When the button is clicked, a basic{" "}
          <Link
            href="https://segment.com/docs/connections/spec/identify/"
            target="blank_"
          >
            Identify
          </Link>{" "}
          call is fired and sent to your debugger.
        </Text>
        <Text marginTop={majorScale(1)}>
          Identify events require a{" "}
          <Link
            href="https://segment.com/docs/connections/spec/identify/#identities"
            target="blank_"
          >
            user or anonymous ID
          </Link>
          . Our browser and mobile libraries automatically use Anonymous IDs
          under the covers to keep track of users as they navigate around your
          website or app, so in this case, you don’t need to worry about them.
        </Text>
      </Pane>

      <Image
        maxWidth="50%"
        src={DebuggerImage}
        alt="Debugger with identify() call"
      />
    </Pane>
  )
}

export default Identify
