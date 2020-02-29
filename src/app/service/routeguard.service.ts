import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HardcoredAuthentificationService } from '../hardcored-authentification.service';

@Injectable({
  providedIn: 'root'
})
export class RouteguardService implements CanActivate{

  constructor(private hardCoded: HardcoredAuthentificationService) {
    
   }

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
     
     if(this.hardCoded.isUserLoggedIn()){
      return true;
     }else return false;
      
  }
}
