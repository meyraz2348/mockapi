import displayItem from '../data.js'
const addToDOM = (
  vehicles,
  element,
  vehicleDataElement,
  divElement,
  divElement2,
  imageElement
) => {
  imageElement.classList.add('image')
  imageElement.src =
    'https://images.pexels.com/photos/3065602/pexels-photo-3065602.jpeg?cs=srgb&dl=pexels-kelly-l-3065602.jpg&fm=jpg'
  vehicleDataElement.append(divElement)
  divElement.innerHTML = `<p class = "vehicleInformation"> 2015 ${vehicles[0].vehicleName}  ${vehicles[0].vehicleColor} auto 4WD</p>
  `
  element.append(imageElement)
  vehicleDataElement.append(divElement2)
  divElement2.classList.add('listDataElement')
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

export default addToDOM
