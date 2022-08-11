import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartOptions } from 'chart.js';
import Annotation from 'chartjs-plugin-annotation';
import { BaseChartDirective } from 'ng2-charts';
import { ConsultasService } from 'src/app/services/consultas.service';
import { SocketWebService } from 'src/app/services/socket-web.service';

@Component({
  selector: 'app-linear-bd',
  templateUrl: './linear-bd.component.html',
  styleUrls: ['./linear-bd.component.scss']
})
export class LinearBDComponent implements OnInit {
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
  ngOnInit(): void {
    this.consultas.getDatos$().subscribe(data=>{
      for(let i of data){
        if(i.sensor == 'TEMP'){
          this.lineChartData.labels?.push(i.date);
          this.lineChartData.datasets[0].data.push(i.value);
        }else
        this.lineChartData.datasets[1].data.push(i.value);
          this.chart?.update();

      }
    });
  }

}
