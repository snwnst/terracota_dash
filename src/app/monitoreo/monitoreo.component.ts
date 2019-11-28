import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.services';

@Component({
  selector: 'app-monitoreo',
  templateUrl: './monitoreo.component.html',
  styleUrls: ['./monitoreo.component.scss']
})
export class MonitoreoComponent implements OnInit {

  public chart = {
    type: "radar",
    labels: ["NAVEGADORES", "WINWORD", "EXCEL", "ONEDRIVE", "TEAMS", "OUTLOOK", "POWERPNT", "OTROS"],
    data: [
      {
        data: [9.53, 3.12, 3.66, 5.59, 2.38, 3.28, 0.02, 0.34],
        label: "5:47:40 en uso"
      }
    ],
    options: {
      responsive: true,
      animation: {
        duration: 1
      }

    }
  }

  constructor(
    private aps: AppService,
  ) {
    this.aps.getMetricsClean()
    this.aps.getMetricshistorico()


  }

  ngOnInit() {
    console.log(this.aps.metricas_historico);

  }




}
