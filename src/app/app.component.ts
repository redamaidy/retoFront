import { Component } from '@angular/core';
import { ConsultasService } from './services/consultas.service';
import { SocketWebService } from './services/socket-web.service';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'retoFront';
  constructor(){

  }

  
}
