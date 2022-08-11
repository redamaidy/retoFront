import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  constructor(private http: HttpClient) { }

  getDatos$():Observable<any>{
    const path = 'http://localhost:4000/api/datos';
    return this.http.get<any>(path);
  }
  setDatos$(sensor:string,value:number,date:string):Observable<any>{
    const path = 'http://localhost:4000/api/datos';
    return this.http.post<any>(path,{sensor:sensor,value:value,date:date});
  }
}