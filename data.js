import addToDOM from './src/addToDOMData.js'
import getData from './src/getData.js'
import get from './src/getElement.js'
const URL = 'https://61e4f981595afe00176e5244.mockapi.io/users'
const getImageData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos')
  const data = await response.json()
  return { data }
}
const displayItem = async () => {
  const element = get('.detailsDiv')
  const vehicleDataElement = get('.vehicleData')
  const divElement = document.createElement('div')
  const divElement2 = document.createElement('div')
  const imageElement = document.createElement('img')
  const names = await getData(URL)
  let n = localStorage.getItem('target')
  const { vehicles } = names[n - 1]
  const callingDOM = addToDOM(
    vehicles,
    element,
    vehicleDataElement,
    divElement,
    divElement2,
    imageElement
  )
}
displayItem()
export default displayItem
