'use strict'

const Store = require('electron-store')

class DataStore extends Store {
  constructor (settings) {
    super(settings)

    this.emp = this.get('emp') || []
  }

  saveTodos () {
    // save new Emp to JSON file
    this.set('emp', this.emp)

    // returning 'this' allows method chaining
    return this
  }

  getTodos () {
    // set object's emp to emp in JSON file
    this.emp = this.get('emp') || []

    return this
  }

  addTodo (todo) {
    // merge the existing emp with the new todo
    this.emp = [ ...this.emp, todo ]

    return this.saveTodos()
  }

  deleteTodo (todo) {
    // filter out the target todo
    this.emp = this.emp.filter(t => t !== todo)

    return this.saveTodos()
  }
}

module.exports = DataStore
