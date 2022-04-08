export const getStringifiedProperties = (defaultProperties: any) =>
  JSON.stringify(defaultProperties, null, 2).slice(4, -2)
