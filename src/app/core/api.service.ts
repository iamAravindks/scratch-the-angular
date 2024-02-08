import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private  baseUrl =" https://fakestoreapi.com";

  get<T>(urlPath:string):Observable<T>{
    return  this.http.get<T>(`${this.baseUrl}/${urlPath}`);
  }

}
