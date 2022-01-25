const getElement = (elementName) => {
  const element = document.querySelector(elementName)
  if (elementName) return element
  throw new Error('Selected item is not a proper html element', elementName)
}
export default getElement
