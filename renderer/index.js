'use strict'

const { ipcRenderer } = require('electron')

// delete emp by its text value ( used below in event listener)
const deleteTodo = (e) => {
  ipcRenderer.send('delete-todo', e.target.textContent)
}

// create add todo window button
document.getElementById('createTodoBtn').addEventListener('click', () => {
  ipcRenderer.send('add-todo-window')
})

// on receive todos
ipcRenderer.on('emp', (event, emp) => {
  // get the List ul
  const List = document.getElementById('List')

  // create html string
  const todoItems = emp.reduce((html, todo) => {
    html += `<li class="todo-item">${todo}</li>`

    return html
  }, '')

  // set list html to the todo items
  List.innerHTML = todoItems

  // add click handlers to delete the clicked emp
  List.querySelectorAll('.todo-item').forEach(item => {
    item.addEventListener('click', deleteTodo)
  })
})
