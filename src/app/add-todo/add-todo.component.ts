import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../todo-list/todo-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  id;
  description;
  date;
  isDone;

  constructor(private service: TodoDataService, private router: Router) { }

  ngOnInit() {
  
  }

  addTodo(user, todo){
    todo = new Todo();
    todo.username = 'george';
    todo.id = this.id;
    todo.description = this.description;
    todo.date = this.date;
    todo.isDone = this.isDone;
    this.service.addTodo(todo.username, todo).subscribe();
    this.router.navigate(['todo-list']);
  }

}
