import { Component, OnInit } from '@angular/core';
import { TodoListComponent, Todo } from '../todo-list/todo-list.component';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {

  id;
  todo: Todo;


  constructor(
    private todoService: TodoDataService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.todo=new Todo(); //ca sa nu mai dea eroare undefined

    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.id=params.get('id');
      console.log(this.id);
      }
    )

    this.todoService.getTodo('george', this.id)
    .subscribe(
      data => {
        this.todo = data
      
        console.log(this.todo);
        console.log(this.todo.date);
      }
    )
  }

  saveTodo(){
    this.todoService.updateTodo('george', this.todo)
    .subscribe();
    this.router.navigate(['todo-list']);
  }

}
