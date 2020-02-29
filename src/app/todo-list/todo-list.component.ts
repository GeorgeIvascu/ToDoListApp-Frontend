import { Component, OnInit } from '@angular/core';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[]
  thead = ['User', 'To-Do', 'Date', 'isDone', 'Delete', 'Update'];
  message: string;
  
  constructor(private service: TodoDataService, private router: Router) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.service.getAllTodos('george').subscribe(
      response => {
        this.todos = response;
        console.log(response);
      }
    )
  }

  deleteTodo(id){
    console.log(this.service.deleteTodoById('george', id))
    this.service.deleteTodoById('george', id).subscribe(
      response => {
        this.message = `Delete of Todo ${id} was succesful`;
        this.refreshTodos();
      }
  
    );
    // this.service.deleteTodoById('george', this.todos).subscribe();
  }

  updateTodo(id){
    this.router.navigate([`todo-list/${id}`]);
  }

  addTodo(){
    this.router.navigate(['add-todo']);
  }


}

export class Todo{
  id;
  username;
  description;
  date;
  isDone;
}
