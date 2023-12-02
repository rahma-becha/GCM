import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { User } from 'src/Model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private apiUrl = 'http://localhost:3000/user'; // L'URL de votre serveur JSON (par exemple, json-server)

  constructor(private http: HttpClient) {}

  // Méthode pour vérifier les informations d'identification
  authenticate(email: string, password: string): Observable<User | null> {
    return this.http.get<User[]>(`${this.apiUrl}/users?email=${email}&password=${password}`)
      .pipe(
        map(users => users.length > 0 ? users[0] : null),
        
      );
  }

  // Méthode pour récupérer le rôle de l'utilisateur
  getUserRole(): string | null {
    const userString = localStorage.getItem('currentUser');
    const user = userString ? JSON.parse(userString) : null;
    return user ? user.roles[0] : null;
  }
  
}
