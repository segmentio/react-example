export enum IndustryEnum {
  Advertizing = "Advertizing",
  Marketing = "Marketing",
  Technology = "Technology",
}

export type Industry = keyof typeof IndustryEnum
