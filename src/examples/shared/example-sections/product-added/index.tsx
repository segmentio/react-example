import React from "react"
import { Pane, majorScale, Text, Link, Image } from "evergreen-ui"
import DebuggerImage from "./Debugger.png"
import ProductAddedExample from "./ProductAddedExample"

const ProductAdded: React.FC = () => {
  return (
    <Pane
      display="flex"
      marginTop={majorScale(2)}
      justifyContent="space-between"
    >
      <Pane display="flex" width="100%" flexDirection="column">
        <ProductAddedExample />

        <Text marginTop={majorScale(4)}>
          When the button is clicked, a{" "}
          <Link
            href="https://segment.com/docs/connections/spec/ecommerce/v2/#product-added"
            target="blank_"
          >
            Product Added Track
          </Link>{" "}
          call is fired and sent to your debugger.
        </Text>
        <Text marginTop={majorScale(2)}>
          We recommend the{" "}
          <Link
            href="https://segment.com/docs/connections/spec/"
            target="blank_"
          >
            Segment Spec
          </Link>{" "}
          to provide guidance on meaningful data to capture, and the best format
          for it, across all of Segment’s libraries and APIs. If you implement
          Segment using these formats, it’s simple to translate your data to
          downstream tools.
        </Text>
      </Pane>

      <Image
        maxWidth="50%"
        src={DebuggerImage}
        alt="Debugger with track() call"
      />
    </Pane>
  )
}

export default ProductAdded
