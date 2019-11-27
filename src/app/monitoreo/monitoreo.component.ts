import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.services';
import { RadialChartOptions, ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';



@Component({
  selector: 'app-monitoreo',
  templateUrl: './monitoreo.component.html',
  styleUrls: ['./monitoreo.component.scss']
})
export class MonitoreoComponent implements OnInit {

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['WINWORD', 'OUTLOOK', 'ONEDRIVE', 'EXCEL', 'NAVEGADORES', 'POWERP', 'OTROS'];

  public radarChartData: ChartDataSets[] = [
    { data: [10,20,30,40,50,60,70], label: 'Series A' },
  ];
  public radarChartType: ChartType = 'radar';

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
  
  constructor(
    private aps: AppService,
   ) { 
    this.aps.getMetricsClean()
  }

  ngOnInit() {
   
  }




}
