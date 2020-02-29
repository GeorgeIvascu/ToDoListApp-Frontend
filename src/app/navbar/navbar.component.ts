import { Component, OnInit } from '@angular/core';
import { HardcoredAuthentificationService } from '../hardcored-authentification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //isUserLogged: boolean = false;

  constructor(private hardcodedAuth: HardcoredAuthentificationService) { }

  ngOnInit() {
    //this.isUserLogged = this.hardcodedAuth.isUserLoggedIn()
  }

}
