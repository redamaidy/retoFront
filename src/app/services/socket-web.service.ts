import { Injectable,EventEmitter, Output } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SocketWebService {
  constructor(private socket:Socket) {}
  public getData$():Observable<any>{
    return new Observable(observer=>{
      try{
        this.socket.on('conect',()=>{
          console.log('Conectado');
          
        })
        this.socket.on('iot/sensors',(data: any)=>{
          console.log('Datos');
          observer.next(data);
        })
        this.socket.on('disconnect',()=>{
          observer.complete();
          
        })
        this.socket.on('error',(e:any)=>{
          observer.error(e);
          
        })
      }catch(e){
        observer.error(e);
      }
    });
  }

}
