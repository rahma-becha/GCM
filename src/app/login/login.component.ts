import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;
  constructor(private authService: AuthentificationService, private router: Router) {}

  login() {
    this.authService.authenticate(this.email, this.password).subscribe(user => {
      if (user) {
        // Authentification réussie
        // Stocker l'utilisateur dans le stockage local si nécessaire
        localStorage.setItem('currentUser', JSON.stringify(user));
        
        // Rediriger l'utilisateur vers une page appropriée
        if (user.roles.includes('medcin')) {
          this.router.navigate(['/dashboard-medecin']);
        } else if (user.roles.includes('secretaire')) {
          this.router.navigate(['/dashboard-secretaire']);
        } else {
          // Gérer d'autres rôles ou une redirection par défaut ici
        }
      } else {
        // Authentification échouée
        alert('Identifiants invalides');
      }
    });
  }
}
