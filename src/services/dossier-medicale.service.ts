import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Traitement } from 'src/Model/Traitement';
import { DossierMedical } from 'src/Model/DossierMedical';

@Injectable({
  providedIn: 'root',
})
export class DossierMedicalService {
  private apiUrl = 'http://localhost:3000/dossierMedical';

  constructor(private http: HttpClient) {}


  getDossiersMedicaux(): Observable<DossierMedical[]> {
    return this.http.get<DossierMedical[]>(this.apiUrl);
  }


  getDossierMedicalById(id: number): Observable<DossierMedical> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<DossierMedical>(url);
  }


  getTraitementsForDossierMedical(id: number): Observable<Traitement[]> {
    const url = `${this.apiUrl}/${id}/traitements`;
    return this.http.get<Traitement[]>(url);
  }


  addDossierMedical(dossierMedical: DossierMedical): Observable<DossierMedical> {
    return this.http.post<DossierMedical>(this.apiUrl, dossierMedical);
  }


  updateDossierMedical(dossierMedical: DossierMedical): Observable<DossierMedical> {
    const url = `${this.apiUrl}/${dossierMedical.id}`;
    return this.http.put<DossierMedical>(url, dossierMedical);
  }

 
  deleteDossierMedical(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
