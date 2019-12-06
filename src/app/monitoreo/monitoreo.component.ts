import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.services';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MonitoreoBP } from 'app/app.model';

@Component({
  selector: 'app-monitoreo',
  templateUrl: './monitoreo.component.html',
  styleUrls: ['./monitoreo.component.scss']
})
export class MonitoreoComponent implements OnInit {

  public mbpform: FormGroup;
  public mbpdata: MonitoreoBP;

  public data = {'type': 'pie', 'labels': ['OFMATICA', 'APLICATIVOS', 'NAVEGADORES', 'OTROS', 'SIN/USO'], 'data': [{'data': [10.0, 16.0, 25.0, 17.0, 32.0],'label':'%'}], 'options': {'responsive': true}}

  constructor(
    private aps: AppService,
    public formBuilder: FormBuilder
  ) {
    this.aps.getMetricsCleanAll()
    this.aps.getMetricsCleanPie()
    this.aps.getMetricsClean()
    this.aps.getMetricsCleanCahrt()
    this.aps.getIndicadores()

  } 

  ngOnInit() {
    this.mbpdata = new MonitoreoBP();
    this.mbpform = this.formBuilder.group({
      finicio: [this.mbpdata.finicio, [Validators.required]],
      ffinal: [this.mbpdata.ffinal],
      usuarios: [this.mbpdata.usuarios]
    });
  }

  search() {
    if (!this.mbpform.value.ffinal) {
      this.mbpform.value.ffinal = this.mbpform.value.finicio
    }


    this.aps.getMetricsPesonalizado({
      finicio: this.mbpform.value.finicio.toLocaleDateString(),
      ffinal: this.mbpform.value.ffinal.toLocaleDateString(),
      usuarios: this.mbpform.value.usuarios
    })
  }

  getClas(value) {

    switch (value) {
      case "EXCEL":
        return `card-header card-header-success card-header-icon`
      case "WINWORD":
        return `card-header card-header-info card-header-icon`
      case "OUTLOOK":
        return `card-header card-header-primary card-header-icon`
      case "NAVEGADORES":
        return `card-header card-header-warning card-header-icon`
      case "TEAMS":
        return `card-header card-header-info card-header-icon`
      case "ONEDRIVE":
        return `card-header card-header-primary card-header-icon`
      default:
        return `card-header card-header-danger card-header-icon`
    }



  }

  getIcon(value) {

    switch (value) {
      case "EXCEL":
        return `fa fa-table`
      case "WINWORD":
        return `fas fa-file-word`
      case "OUTLOOK":
        return `fas fa-envelope`
      case "NAVEGADORES":
        return `fab fa-internet-explorer`
      case "TEAMS":
        return `fas fa-comment-dots`
      case "ONEDRIVE":
        return `fas fa-cloud-upload-alt`
      default:
        return `fas fa-desktop`
    }

  }




}
