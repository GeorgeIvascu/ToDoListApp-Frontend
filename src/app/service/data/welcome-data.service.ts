import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeWelcomeService(){
    //console.log("Welcome Service");
    return this.http.get('http://localhost:8080/msg', {responseType: 'text'});
  }

  executeWelcomeBean(){
    return this.http.get<WelcomeBean>('http://localhost:8080/bean');
  }

  executeWelcomeBeanWithPath(name){
    return this.http.get<WelcomeBean>(`http://localhost:8080/bean/${name}`);
  }

}

export class WelcomeBean{
  
  constructor(public message: string){}

  
}
