import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import {ErrorComponent} from './error/error.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteguardService } from './service/routeguard.service';
import { UpdateTodoComponent } from './update-todo/update-todo.component';
import { AddTodoComponent } from './add-todo/add-todo.component';


const routes: Routes = [
  {path:'', component: WelcomeComponent, pathMatch: 'full'},
  {path:'welcome', component: WelcomeComponent},
  {path:'login', component:LoginComponent, canActivate:[RouteguardService]},
  {path:'todo-list', component: TodoListComponent, canActivate:[RouteguardService]},
  {path:'logout', component: LogoutComponent, canActivate:[RouteguardService]},
  {path:'todo-list/:id', component: UpdateTodoComponent, canActivate:[RouteguardService]},
  {path:'add-todo', component: AddTodoComponent, canActivate:[RouteguardService]},


  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
