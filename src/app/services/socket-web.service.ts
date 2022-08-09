import { Injectable,EventEmitter, Output } from '@angular/core';
import { Socket } from 'ngx-socket-io';
@Injectable({
  providedIn: 'root'
})
export class SocketWebService extends Socket{
  @Output() outEven: EventEmitter<any> = new EventEmitter();
  constructor() {
    super({
      url:'http://localhost:5000/'
    })
  }
  listen = () => {
    this.ioSocket.on('evento', (res: any) => this.outEven.emit(res));   
  }
  emitEvent = (payload = {}) => {
    this.ioSocket.emit('evento', payload)

  }
}
