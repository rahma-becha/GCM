import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/Model/User';
import { AuthentificationService } from 'src/services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;
  users:User[]=[]
  user!:User;
  constructor(private authService: AuthentificationService, private router: Router) {}

  login() {
    this.authService.authenticate().subscribe(users => {
       this.users=users
       
       this.verifyCridentials()
    });
  }
  getUser():User|undefined{
    for(const item of this.users){
      if(item.email==this.email && item.password==this.password){
        return item
      }
    }
    return undefined
  }
  verifyCridentials(){
    for(const item of this.users){
      if(item.email==this.email && item.password==this.password){
        this.user=item
      }
    }
    if (this.user) {
      // Authentification réussie
      // Stocker l'utilisateur dans le stockage local si nécessaire
      localStorage.setItem('currentUser', JSON.stringify(this.user));
      
      // Rediriger l'utilisateur vers une page appropriée
      this.router.navigate(['/admin/dashboard']);
     
    } else {
      // Authentification échouée
      alert('Identifiants invalides');
    }
  }
}
