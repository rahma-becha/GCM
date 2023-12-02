// alergie.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alergie } from 'src/Model/Alergie';
 // Assurez-vous d'ajuster le chemin vers votre modèle

@Injectable({
  providedIn: 'root',
})
export class AlergieService {
  private apiUrl = 'http://localhost:3000/alergie'; // Assurez-vous de remplacer cela par l'URL correcte de votre API

  constructor(private http: HttpClient) {}

  getAlergies(): Observable<Alergie[]> {
    return this.http.get<Alergie[]>(this.apiUrl);
  }

  addAllergie(alergie: Alergie): Observable<Alergie> {
    return this.http.post<Alergie>(this.apiUrl, alergie);
  }
}
