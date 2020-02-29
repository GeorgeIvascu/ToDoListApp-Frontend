import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { ThrowStmt } from '@angular/compiler';
import {WelcomeBean} from '../service/data/welcome-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: string = ''
  welcomeMessageFromService: string;
  errorMessage: string;
  welcomeBean;

  constructor(private route: ActivatedRoute, private service: WelcomeDataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: ParamMap)=>{
        console.log(params.get('name'));
        this.user=params.get('name');
      }
    )
    //console.log('name');
  }

  getWelcome(){
    //console.log("welcome"+this.user);
    console.log(this.service.executeWelcomeService());
    this.service.executeWelcomeService().subscribe(
      response => this.handleSuccesfulResponse(response),
      
    );

  }

  getWelcomeBean(){
    console.log(this.service.executeWelcomeBean());
    this.service.executeWelcomeBean().subscribe(
      resp => this.handleSuccesfulResponseBean(resp),
      error => this.handleErrorResponse(error)
    );

  }


  getWelcomeBeanWithPath(){
    console.log(this.service.executeWelcomeBeanWithPath(this.user));
    this.service.executeWelcomeBeanWithPath(this.user).subscribe(
      resp => this.handleSuccesfulResponseBean(resp),
      error => this.handleErrorResponse(error)
    );

  }


  handleSuccesfulResponse(response){
    this.welcomeMessageFromService = response;
    console.log(response);
  }

  handleSuccesfulResponseBean(response){
    this.welcomeBean = response;
    console.log(response);
    console.log(response.message);
  }

  handleErrorResponse(error){
    console.log(error.error);
    this.errorMessage = error.error;
  }

}
