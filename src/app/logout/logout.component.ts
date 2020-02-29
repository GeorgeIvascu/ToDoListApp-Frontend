import { Component, OnInit } from '@angular/core';
import { HardcoredAuthentificationService } from '../hardcored-authentification.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardCoded: HardcoredAuthentificationService) { }

  ngOnInit() {
    this.hardCoded.logOut();
  }

}
