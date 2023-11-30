import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medicament } from 'src/Model/Medicament';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {
  private apiUrl = 'http://localhost:3000/medicaments';
  constructor(private http: HttpClient) {}

  getAllMedicaments():Observable<Medicament[]>{
    return this.http.get<Medicament[]>(this.apiUrl)
  }
}
