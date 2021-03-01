import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Depense } from '../models/depense';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DepenseService {

  private getUrl: string = "http://localhost:8080/api/v1/depenses";

  constructor(private _httpClient:HttpClient) { }


  getDepenses(): Observable<Depense[]> {
    return this._httpClient.get<Depense[]>(this.getUrl).pipe(
      map(response => response)
    )
  }

  saveDepense(depense: Depense): Observable<Depense> {
    return this._httpClient.post<Depense>(this.getUrl, depense);
  }

   getDepense(id: number): Observable<Depense> {
     return this._httpClient.get<Depense>(`${this.getUrl}/${id}`).pipe(
       map(response => response)
     )
   }

   deleteDepense(id: number): Observable<any> {
     return this._httpClient.delete(`${this.getUrl}/${id}`,{responseType: 'text'});
   }

}
