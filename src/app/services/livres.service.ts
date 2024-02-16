import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { livre } from '../types/livre';

@Injectable({
  providedIn: 'root'
})
export class LivresService {

  urlApi:string = "https://localhost:7132";

  constructor(private http:HttpClient) { }

  getLivres=():Observable<livre[]>=>this.http.get<livre[]>(this.urlApi);
}
