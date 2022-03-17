export enum IndustryEnum {
  Advertising = "Advertising",
  Marketing = "Marketing",
  Technology = "Technology",
}

export type Industry = keyof typeof IndustryEnum
