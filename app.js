import addToDOM from './src/addToDOMapp.js'
import get from './src/getElement.js'
import getData from './src/getData.js'
const button = get('button')
const element = get('.tableDiv')
const divElement = document.createElement('div')
const URL = 'https://61e4f981595afe00176e5244.mockapi.io/users'
const displayData = async () => {
  get('.loading').classList.add('hideLoading')
  const data = await getData(URL)
  addToDOM(data, element, divElement)
  window.addEventListener('click', function (e) {
    e.preventDefault()
    if (e.target.classList.contains('companyName')) {
      const k = e.target.id
      console.log(k)
      localStorage.setItem('target', k)
      window.location.replace('details.html')
    }
  })
}
button.addEventListener('click', () => {
  button.classList.add('show-btn')
  get('h2').classList.add('addToCenter')
  get('.loading').classList.remove('hideLoading')
  setTimeout(() => {
    displayData()
  }, 2000)
})
// const addToDOM = (data) => {
//   element.append(divElement)
//   divElement.classList.add('section-center')
//   divElement.innerHTML = `<table>
//           <thead>
//               <tr>
//                   <th >Store Name</th>
//                   <th> Store Address</th>
//                 </tr>
//             </thead>
//             <tbody id="elements"></tbody>
//       </table>`
//   const tableElement = document.getElementById('elements')
//   data.forEach((input) => {
//     const { id, name, branches } = input
//     tableElement.innerHTML += `
//     <tr class = "new">
//     <td class = 'companyName' id = "${id}"> ${name}
// </td>
//      <td >${branches[0].streetName}, ${branches[0].suburb}</td>
//      </tr>`
//   })
// }
