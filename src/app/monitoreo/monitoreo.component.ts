import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.services';



@Component({
  selector: 'app-monitoreo',
  templateUrl: './monitoreo.component.html',
  styleUrls: ['./monitoreo.component.scss']
})
export class MonitoreoComponent implements OnInit {
  

  constructor(
    private aps: AppService,
   ) { 
    this.aps.getMetricsClean()
     
     
    
  }

  ngOnInit() {

    
  }

  resumen() {
    this.aps.metricsClean.subscribe(data => console.log(data))
  }


}
