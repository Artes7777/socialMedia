export const required = (value) => {
  if (value) return undefined
  return "Введите запись"
}

export const maxLengthCreator = (symbols) => (value) => {
  if(value && value.length > symbols) return `Запись должна быть не больше ${symbols} символов`
  return undefined
}