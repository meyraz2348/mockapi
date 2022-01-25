const element = document.body.children[0]
const vehicleDataElement = document.querySelector('.vehicleData')
// const listDataElement = document.querySelector('.listDataElement')
const divElement = document.createElement('div')
const divElement2 = document.createElement('div')
const URL = 'https://61e4f981595afe00176e5244.mockapi.io/users'
const getData = async () => {
  const response = await fetch(URL)
  const data = await response.json()
  return data
}
const getImageData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos')
  const data = await response.json()
  return { data }
}
const displayItem = async () => {
  const names = await getData()
  let n = localStorage.getItem('target')
  n--
  const { vehicles } = names[n]
  console.log(vehicles)
  addToDOM(vehicles)
}
displayItem()
const addToDOM = (vehicles) => {
  // const image = await getImageData()
  const imageElement = document.createElement('img')
  imageElement.classList.add('image')
  imageElement.src =
    'https://images.pexels.com/photos/3065602/pexels-photo-3065602.jpeg?cs=srgb&dl=pexels-kelly-l-3065602.jpg&fm=jpg'
  element.append(imageElement)
  vehicleDataElement.append(divElement)
  divElement.innerHTML = `<p class = "vehicleInformation"> 2015 ${vehicles[0].vehicleName}  ${vehicles[0].vehicleColor} auto 4WD</p>
  `
  vehicleDataElement.append(divElement2)
  divElement2.innerHTML += `
  <ul class = "list1" >
  <li>63,000 km </li>
  <li>${vehicles[0].vehicleModel}</li>
  <li> ${vehicles[0].vehicleManufacturer}</li>
  </ul>
  <ul  class = "list2">
  <li>${vehicles[0].vehicleType}</li>
  <li>${vehicles[0].vehicleColor}</li>
  </ul>`
}
