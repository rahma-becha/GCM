import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Secretaire } from 'src/Model/Secretaire';


@Injectable({
  providedIn: 'root',
})
export class SecretaireService {
  private apiUrl = 'http://localhost:3000/secraitaire'; 

  constructor(private http: HttpClient) {}

  
  getSecretaires(): Observable<Secretaire[]> {
    return this.http.get<Secretaire[]>(this.apiUrl);
  }

 
  getSecretaireById(id: number): Observable<Secretaire> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Secretaire>(url);
  }

  
  addSecretaire(Secretaire: Secretaire): Observable<Secretaire> {
    return this.http.post<Secretaire>(this.apiUrl, Secretaire);
  }

 
  updateSecretaire(Secretaire: Secretaire): Observable<Secretaire> {
    const url = `${this.apiUrl}/${Secretaire.id}`;
    return this.http.put<Secretaire>(url, Secretaire);
  }

 
  deleteSecretaire(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
