import { Component } from '@angular/core';
import { SocketWebService } from './services/socket-web.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'retoFront';
  constructor(private socketWeb: SocketWebService){
    this.socketWeb.outEven.subscribe((res: any) => {
      /*const { prevPost } = res;
      this.writeSingle(prevPost, false);*/
    })
  }
}
