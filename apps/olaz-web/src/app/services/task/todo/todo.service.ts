/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Todo } from '../../../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {


  todos: Todo[] = [
    new Todo('This is a test!', false),
    new Todo('Has been done!', true)
  ]

  constructor(public httpClient: HttpClient,) { }
  // getAllTodos() {
  //   return this.todos
  // }

  // getTodoDetails(todoId: any){
  //   this.
  // }

  addTodo(todo: any) {
    const data = {
      newTask: todo
    }
    return this.httpClient.post(environment.endpoint+"todo", data);
    // this.todos.push(todo)
  }

  updateTodo(todo: any) {
    const data = { updateTask: todo};
    return this.httpClient.put(environment.endpoint+"todo",data);
  }

  deleteTodo(todo: any) {
    const data = {
      todo: todo
    }
    return this.httpClient.delete(environment.endpoint+"todo", {body: data});
  }
}
