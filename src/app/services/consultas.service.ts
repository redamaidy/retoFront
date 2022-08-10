import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  constructor(private http: HttpClient) { }

  getTEMP(): Observable<any> {
    const path = 'http://localhost:5050/';
    return this.http.get<any>(path);
  }
}