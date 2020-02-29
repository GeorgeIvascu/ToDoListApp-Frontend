import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TodoListComponent, Todo } from 'src/app/todo-list/todo-list.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  getAllTodos(user:string){
    return this.http.get<Todo[]>(`http://localhost:8080/${user}/todos`);
  }

  deleteTodoById(user:string, id){
    return this.http.delete(`http://localhost:8080/${user}/delete/${id}`)
  }

  getTodo(user:string, id){
      return this.http.get<Todo>(`http://localhost:8080/${user}/todos/${id}`);
  }

  updateTodo(user, todo){
    return this.http.put(`http://localhost:8080/${user}/todos/update`, todo)
  }

  addTodo(user, todo){
    return this.http.post(`http://localhost:8080/${user}/todos/add`, todo);
  }
}
