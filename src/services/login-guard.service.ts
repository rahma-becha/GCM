import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate  {

  constructor(private router: Router) { }
  canActivate() {
    if(localStorage.getItem("currentUser")!=null){
      return true
    }
    this.router.navigate(['/']);
    return false
   }
}
