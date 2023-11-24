import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medecin } from 'src/Model/Medecin';


@Injectable({
  providedIn: 'root',
})
export class MedecinService {
  private apiUrl = 'http://localhost:3000/medecin'; 

  constructor(private http: HttpClient) {}

  
  getMedecins(): Observable<Medecin[]> {
    return this.http.get<Medecin[]>(this.apiUrl);
  }

 
  getMedecinById(id: number): Observable<Medecin> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Medecin>(url);
  }

  
  addMedecin(medecin: Medecin): Observable<Medecin> {
    return this.http.post<Medecin>(this.apiUrl, medecin);
  }

 
  updateMedecin(medecin: Medecin): Observable<Medecin> {
    const url = `${this.apiUrl}/${medecin.id}`;
    return this.http.put<Medecin>(url, medecin);
  }

 
  deleteMedecin(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
