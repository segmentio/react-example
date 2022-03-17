import React from "react"
import {
  Pane,
  majorScale,
  Text,
  Button,
  Select,
  Heading,
  minorScale,
  toaster,
} from "evergreen-ui"
import { trackProductAdded } from "../../../analytics-quick-start/analytics"
import { ShirtColor, ShirtColorEnum, ShirtSize, ShirtSizeEnum } from "./types"
// UNCOMMENT FOR PACKAGE EXAMPLE
// import useAnalytics from "../../../analytics-package/useAnalytics"

const ProductAddedExample: React.FC = () => {
  // UNCOMMENT FOR PACKAGE EXAMPLE
  // const { trackProductAdded } = useAnalytics()
  const [shirtSize, setShirtSize] = React.useState<ShirtSize>(
    ShirtSizeEnum.medium
  )
  const [shirtColor, setShirtColor] = React.useState<ShirtColor>(
    ShirtColorEnum.grey
  )

  const handleFormSubmit = () => {
    trackProductAdded({ color: shirtColor, size: shirtSize })
    toaster.success("Product Added Track call fired")
  }

  return (
    <Pane display="flex" width="100%" flexDirection="column">
      <Text marginBottom={majorScale(2)}>
        Choose an option, and add it to your shopping cart, to see how
        properties can be associated with an event.
      </Text>
      <Pane
        display="flex"
        flexDirection="column"
        height={majorScale(20)}
        alignSelf="center"
      >
        <Heading size={200} marginBottom={minorScale(1)}>
          Shirt Size
        </Heading>
        <Select
          height={majorScale(5)}
          width={majorScale(30)}
          value={shirtSize}
          onChange={(e) => setShirtSize(e.target.value as ShirtSize)}
        >
          {Object.values(ShirtSizeEnum).map((size: ShirtSize) => (
            <option key={size} value={size}>
              {size.toUpperCase()}
            </option>
          ))}
        </Select>
        <Heading
          size={200}
          marginTop={majorScale(2)}
          marginBottom={minorScale(1)}
        >
          Shirt Color
        </Heading>
        <Select
          height={majorScale(5)}
          width={majorScale(30)}
          value={shirtColor}
          onChange={(e) => setShirtColor(e.target.value as ShirtColor)}
        >
          {Object.values(ShirtColorEnum).map((color: ShirtColor) => (
            <option key={color} value={color}>
              {color.toUpperCase()}
            </option>
          ))}
        </Select>
        <Button
          marginTop={majorScale(2)}
          appearance="primary"
          onClick={handleFormSubmit}
          width="fit-content"
        >
          Add to Cart
        </Button>
      </Pane>
    </Pane>
  )
}

export default ProductAddedExample
