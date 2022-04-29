import React from "react"
import {
  Pane,
  majorScale,
  Button,
  Select,
  Heading,
  minorScale,
  Text,
} from "evergreen-ui"
import {
  defaultProductAddedProperties,
  trackProductAdded,
} from "../../../analytics-quick-start/analytics"
import BaseCodeBlock from "./BaseCodeBlock"
import { getStringifiedProperties } from "./utils"

export enum ShirtSize {
  small = "small",
  medium = "medium",
  large = "large",
}

export enum ShirtColor {
  red = "red",
  blue = "blue",
  grey = "grey",
}

const getCodeText = (
  color: ShirtColor,
  size: ShirtSize
) => `analytics.track("Product Added", {
  "size": "${size}",
  "variant": "${color}",
  ${getStringifiedProperties(defaultProductAddedProperties)}
})`

const ProductAddedExample: React.FC = () => {
  const [shirtSize, setShirtSize] = React.useState<ShirtSize>(ShirtSize.medium)
  const [shirtColor, setShirtColor] = React.useState<ShirtColor>(
    ShirtColor.grey
  )

  const handleFormSubmit = () => {
    trackProductAdded({ color: shirtColor, size: shirtSize })
  }

  const handleShirtColorChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => setShirtColor(event.target.value as ShirtColor)

  const handleShirtSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setShirtSize(event.target.value as ShirtSize)

  return (
    <Pane display="flex" flexDirection="column">
      <Text marginBottom={majorScale(4)}>
        Send this event when a user adds a product to their shopping cart
      </Text>
      <Pane display="flex" background="tint1" padding={majorScale(3)}>
        <Pane
          display="flex"
          flexDirection="column"
          height={majorScale(25)}
          marginRight={majorScale(3)}
        >
          <Text marginBottom={majorScale(2)}>
            Select a shirt size and color:
          </Text>
          <Heading size={200} marginBottom={minorScale(1)}>
            Shirt Size
          </Heading>
          <Select
            height={majorScale(5)}
            width={majorScale(30)}
            value={shirtSize}
            onChange={handleShirtSizeChange}
          >
            {Object.values(ShirtSize).map((size: ShirtSize) => (
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
            onChange={handleShirtColorChange}
          >
            {Object.values(ShirtColor).map((color: ShirtColor) => (
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
        <BaseCodeBlock
          codeText={getCodeText(shirtColor, shirtSize)}
          highlight="2,3"
        />
      </Pane>
    </Pane>
  )
}

export default ProductAddedExample
