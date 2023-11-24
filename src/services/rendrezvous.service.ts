import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rendezvous } from 'src/Model/rendezvous';


@Injectable({
  providedIn: 'root',
})
export class RendezvousService {
  private apiUrl = 'http://localhost:3000/rendezvous'; 

  constructor(private http: HttpClient) {}

 
  getRendezvous(): Observable<Rendezvous[]> {
    return this.http.get<Rendezvous[]>(this.apiUrl);
  }


  getRendezvousById(id: number): Observable<Rendezvous> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Rendezvous>(url);
  }


  addRendezvous(rendezvous: Rendezvous): Observable<Rendezvous> {
    return this.http.post<Rendezvous>(this.apiUrl, rendezvous);
  }


  updateRendezvous(rendezvous: Rendezvous): Observable<Rendezvous> {
    const url = `${this.apiUrl}/${rendezvous.id}`;
    return this.http.put<Rendezvous>(url, rendezvous);
  }

  
  deleteRendezvous(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
