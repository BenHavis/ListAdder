const container = document.getElementById('list-div')
const newListName = document.getElementById('new-list')
const button = document.getElementById('button')
const secondButton = document.getElementById('list-button')
const listNum = document.getElementById('list-number')
const newItem = document.getElementById('new-list-item')

let count = 0
const numOfLists = []

button.addEventListener('click', function () {
  count++
  numOfLists.push(count)
  const newDiv = document.createElement('div')
  newDiv.setAttribute('id', `div-${count}`)
  container.appendChild(newDiv)

  const newP = document.createElement('p')
  newP.innerHTML = newListName.value
  newDiv.appendChild(newP)

  const newUL = document.createElement('ul')
  newUL.setAttribute('id', `ul-${count}`)
  newDiv.appendChild(newUL)

  newListName.value = null
})

secondButton.addEventListener('click', function () {
  const listToAddto = listNum.value

  let newLI = document.createElement('li')
  newLI.innerText = newItem.value

  document.getElementById(`ul-${listToAddto}`).appendChild(newLI)

  newItem.value = null
  listNum.value = null
})

const thirdButton = document.getElementById('third-button')

thirdButton.addEventListener('click', function () {
  document.getElementById('test-list').classList.toggle('test-class')
})
