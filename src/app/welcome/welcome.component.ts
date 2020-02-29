import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcoredAuthentificationService } from '../hardcored-authentification.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  username: string;
  password: string;
  invalidLogin: boolean = false;
  //router: Router;

  constructor(private router: Router, private hardCodedAuth: HardcoredAuthentificationService) { }

  ngOnInit() {
  }

  handleLogin(){
    if(this.hardCodedAuth.authenthicate(this.username, this.password)){
      this.invalidLogin=false;
      this.router.navigate(['login']);

    }else{
      this.invalidLogin=true;
    }

  }
}
