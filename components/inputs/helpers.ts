export function getRequiredPath(name: string) {
  return JSON.stringify({
    id: 'layers.yup.mixed.required',
    defaultMessage: `${name} is a required field`,
    values: { path: name },
  })
}
