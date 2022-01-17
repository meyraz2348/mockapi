const button = document.querySelector('button')
const divElement = document.createElement('div')
const element = document.querySelector('h2')
const URL = 'https://61e4f981595afe00176e5244.mockapi.io/users'
const getData = async () => {
  const response = await fetch(URL)
  const data = await response.json()
  return data
}
const displayData = async () => {
  const data = await getData()
  element.append(divElement)
  divElement.innerHTML = `<table>
          <thead>
              <tr>
                  <th>Student Name</th>
                  <th>Address</th>
                </tr>
            </thead>
            <tbody id="elements"></tbody>
      </table>`
  const tableElement = document.getElementById('elements')
  data.forEach((input) => {
    const { id, name, lists } = input
    console.log(name, lists[0].streetname, lists[0].suburb)
    tableElement.innerHTML += `
    <tr>
    <td>${name}</td>
     <td>${lists[0].streetname}, ${lists[0].suburb}</td>
     </tr>`
  })
}
button.addEventListener('click', () => {
  displayData()
})
