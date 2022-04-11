export const getStringifiedProperties = (defaultProperties: object) =>
  JSON.stringify(defaultProperties, null, 2).slice(4, -2)
