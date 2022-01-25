const button = document.querySelector('button')
const divElement = document.createElement('div')
const element = document.querySelector('.tableDiv')
const URL = 'https://61e4f981595afe00176e5244.mockapi.io/users'
const getData = async () => {
  const response = await fetch(URL)
  const data = await response.json()
  return data
}
const displayData = async () => {
  document.querySelector('.loading').classList.add('hideLoading')
  const data = await getData()
  addToDOM(data)
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
  document.querySelector('h2').classList.add('addToCenter')
  document.querySelector('.loading').classList.remove('hideLoading')
  setTimeout(() => {
    displayData()
  }, 2000)
})
const addToDOM = (data) => {
  element.append(divElement)
  divElement.classList.add('section-center')
  divElement.innerHTML = `<table>
          <thead>
              <tr>
                  <th >Store Name</th>
                  <th> Store Address</th>
                </tr>
            </thead>
            <tbody id="elements"></tbody>
      </table>`
  const tableElement = document.getElementById('elements')
  data.forEach((input) => {
    const { id, name, branches } = input
    tableElement.innerHTML += `
    <tr class = "new">
    <td class = 'companyName' id = "${id}"> ${name}
</td>
     <td >${branches[0].streetName}, ${branches[0].suburb}</td>
     </tr>`
  })
}
