

'use strict'

const { ipcRenderer } = require('electron')
const db = require('./db')

document.getElementById('employee-form').addEventListener('submit', (evt) => {
  // prevent default refresh functionality of forms
  evt.preventDefault()
  // input on the form
  const input = evt.target[0]
  var empJson = {}
  empJson["_id"] = evt.target[0].value
  empJson["employeeName"] = evt.target[1].value
  empJson["email"] = evt.target[2].value
  empJson["phoneNumber"] = evt.target[3].value
  empJson["dateOfJoining"] = evt.target[4].value

  console.log(empJson)

  ipcRenderer.send('add-todo', input.value)

  const createEmp = async (emp) => {      
    const emp = await db.tags.insert(emp)
    return emp
  }
  createEmp(empJson)
  
  // reset input
  input.value = ''
})