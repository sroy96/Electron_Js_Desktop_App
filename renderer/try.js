

'use strict'

const { ipcRenderer } = require('electron')

document.getElementById('employee-form').addEventListener('submit', (evt) => {
  // prevent default refresh functionality of forms
  evt.preventDefault()
  // input on the form
  const input = evt.target[0]
  const input1 = evt.target[1]
  console.log(input)
  console.log(input1)

  // send todo to main process
  ipcRenderer.send('add-todo', input.value)

  // reset input
  input.value = ''
})