import { Component, OnInit, Renderer2 } from '@angular/core';
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
  public modo: string;

  public chart = [{ 
    "type": "doughnut", 
    "labels": ["OFMATICA", "APLICATIVOS", "NAVEGADORES"],
    "data": [{ "data": [350, 450, 100] }], 
    "options": { "responsive": true } 
  }]

  constructor(
    private aps: AppService,
    public formBuilder: FormBuilder,
    private renderer: Renderer2
  ) {
    this.modo = "";
    this.aps.getMetricsCleanAll()
    this.aps.getMetricsCleanPie()
    this.aps.getMetricsClean()
    this.aps.getMetricsCleanCahrt()
    this.aps.getIndicadores()

  }

  async ngOnInit() {
    this.mbpdata = new MonitoreoBP();
    this.mbpform = this.formBuilder.group({
      finicio: [this.mbpdata.finicio, [Validators.required]],
      ffinal: [this.mbpdata.ffinal],
      usuarios: [this.mbpdata.usuarios]
    });

    do {
      this.aps.getMetricsCleanAll()
      this.aps.getMetricsCleanPie()
      this.aps.getMetricsClean()
      this.aps.getMetricsCleanCahrt()
      this.aps.getIndicadores()
      await this.sleep(300000);
    } while (this.aps.monit);


  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  changemonit() {
    this.aps.monit = !this.aps.monit
  }

  modoOscuro(event) {
    const parent: HTMLElement = document.getElementById('monitoreo_stilo');
    const child = parent.children[0];
    if (event.checked) {
      this.renderer.setStyle(child, 'filter', 'invert(100%)'); 
      this.renderer.setStyle(child, 'background-color', 'white');
    }
    else {
      this.renderer.setStyle(child, 'filter', '');
      this.renderer.setStyle(child, 'background-color', '');
    }

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
      case "CODE":
        return `card-header card-header-info card-header-icon`
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
      case "CODE":
        return `fas fa-code`
      default:
        return `fas fa-desktop`
    }

  }




}
