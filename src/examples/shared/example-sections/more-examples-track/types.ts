export enum ShirtSizeEnum {
  small = "small",
  medium = "medium",
  large = "large",
}

export enum ShirtColorEnum {
  red = "red",
  blue = "blue",
  grey = "grey",
}

export type ShirtSize = keyof typeof ShirtSizeEnum
export type ShirtColor = keyof typeof ShirtColorEnum
