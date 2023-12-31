import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from 'src/Model/Patient';


@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private apiUrl = 'http://localhost:3000/patients'; 

  constructor(private http: HttpClient) {}

  
  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiUrl);
  }
  
  
  getPatientById(id: number): Observable<Patient> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Patient>(url);
  }

 
  addPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.apiUrl, patient);
  }

  updatePatient(patient: Patient): Observable<Patient> {
    const url = `${this.apiUrl}/${patient.id}`;
    return this.http.put<Patient>(url, patient);
  }

  
  deletePatient(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
