import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartOptions } from 'chart.js';
import { ConsultasService } from 'src/app/services/consultas.service';
import { SocketWebService } from 'src/app/services/socket-web.service';
import {default as Annotation} from 'chartjs-plugin-annotation';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-linear',
  templateUrl: './linear.component.html',
  styleUrls: ['./linear.component.scss']
})
export class LinearComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  constructor(private socketWeb: SocketWebService,
    private consultas: ConsultasService) { 
      Chart.register(Annotation)

    }
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
      },
      {
        data: [10],
        label: 'Humedad',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(200,124,159,0.5)'
      }
    ]
  };
  lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  lineChartLegend = true;
  ngOnInit(){
    this.socketWeb.getPrices$().subscribe((data)=>{
      var date = new Date();
      var ejex = date.toLocaleString();
      const [HUM,TEMP]=data.data;
      
      this.lineChartData.datasets[0].data.push(TEMP.value);
      this.lineChartData.datasets[1].data.push(HUM.value);
      this.lineChartData.labels?.push(ejex);
      this.chart?.update();
      this.consultas.setDatos$(TEMP.sensor,TEMP.value,ejex).subscribe(a=>{
        console.log(a);
      });
      this.consultas.setDatos$(HUM.sensor,HUM.value,ejex).subscribe(a=>{
        console.log(a);
      });
    });
  }

}
