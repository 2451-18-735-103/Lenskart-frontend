import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lenses } from '../_Models/lenses.model';

@Injectable({
  providedIn: 'root'
})
export class LensesService {
  private baseURL = "http://localhost:1581/api/lenses";
  constructor(private httpClient: HttpClient) { }
  getLensesList(): Observable<Lenses[]>{

    return this.httpClient.get<Lenses[]>(`${this.baseURL}`);

  }

  createLenses(lenses:Lenses):Observable<Object>{

     return this.httpClient.post(`${this.baseURL}`,lenses);

  }

 

  deleteLenses(id:number): Observable<Object>{

    return this.httpClient.delete('${this.baseURL}/${id}');

  }
}
