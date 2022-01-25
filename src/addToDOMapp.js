const addToDOM = (data, element, divElement) => {
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
export default addToDOM
