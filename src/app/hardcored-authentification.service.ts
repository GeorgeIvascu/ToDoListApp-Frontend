import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcoredAuthentificationService {

  constructor() { }

  authenthicate(user, password){
    console.log('before' + this.isUserLoggedIn());
    if(user=="george" && password=="g"){
      sessionStorage.setItem('authenthicated user', user);
      console.log('after' + this.isUserLoggedIn());
      return true;
    }else{
      return false;
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenthicated user');
    if(user!=null){
      return true;
    }else return false;
  }


  logOut(){
    sessionStorage.removeItem('authenthicated user');

    //sessionStorage.clear();
  }
}
