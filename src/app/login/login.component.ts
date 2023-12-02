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
       users=users
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
    let user:User|undefined=this.getUser()
    console.log(user)
    if (user) {
      // Authentification réussie
      // Stocker l'utilisateur dans le stockage local si nécessaire
      localStorage.setItem('currentUser', JSON.stringify(user));
      
      // Rediriger l'utilisateur vers une page appropriée
      if (user.roles.includes('medcin')) {
        this.router.navigate(['/admin/dashboard']);
      } else if (user.roles.includes('secretaire')) {
        this.router.navigate(['/admin/dashboard']);
      } else {
        // Gérer d'autres rôles ou une redirection par défaut ici
      }
    } else {
      // Authentification échouée
      alert('Identifiants invalides');
    }
  }
}
