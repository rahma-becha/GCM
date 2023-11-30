import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Analyse } from 'src/Model/Analyse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalyseService {
  private apiUrl = 'http://localhost:3000/analyses';

  constructor(private http: HttpClient) {}
  getAllAnalyses():Observable<Analyse[]>{
     return this.http.get<Analyse[]>(this.apiUrl)
  }
}
