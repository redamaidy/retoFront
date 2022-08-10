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
  constructor(private socketWeb: SocketWebService,
      private consultas: ConsultasService){

  }
  datos:number[]=[10,25];
  ejeX:string[]=['min','max'];
  showFiller = false;

  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['min'],
    datasets: [
      {
        data: [10],
        label: 'Temperatura',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };
  lineChartOptions: ChartOptions<'line'> = {
    responsive: true
  };
  lineChartLegend = true;

  ngOnInit(){
    this.socketWeb.getPrices$().subscribe((data)=>{
      var date = new Date();
      var ejex = date.toLocaleString();
      const [HUM,TEMP]=data.data;
      this.lineChartData.datasets[0].data.push(TEMP.value);
      this.lineChartData.labels?.push(ejex);
      
    });
    
    this.consultas.getTEMP().subscribe(a=>{
      console.log(a);
      
    });
  }
  
}
