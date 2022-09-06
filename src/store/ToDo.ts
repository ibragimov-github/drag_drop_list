import { makeAutoObservable } from "mobx"

type TypeTodo = {
  id: string, 
  content: string,
  status: boolean
}

class ToDo {
  todoList: TypeTodo[] = []
  constructor() {
    makeAutoObservable(this)
  }
  addTodo (todo: TypeTodo) {
    this.todoList.unshift(todo)
  }
  removeTodo (id: string) {
    this.todoList = this.todoList.filter(todo => todo.id !== id)
  }
  completeTodo(id: string) {
    this.todoList = this.todoList.map((todo) => {
      if(todo.id === id) {
        return {
          ...todo, 
          status: !todo.status
        }
      }
      return todo;
    })
  }
}

export default new ToDo()