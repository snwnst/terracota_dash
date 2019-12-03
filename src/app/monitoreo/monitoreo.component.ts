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


  constructor(
    private aps: AppService,
    public formBuilder: FormBuilder
  ) {
    this.aps.getMetricsClean()
    this.aps.getMetricshistorico()


  }

  ngOnInit() {
    this.mbpdata = new MonitoreoBP();
    this.mbpform = this.formBuilder.group({
      finicio: [this.mbpdata.finicio, [Validators.required]],
      ffinal: [this.mbpdata.ffinal],
      usuarios: [this.mbpdata.usuarios]
    });
  }

  search(){
    if (!this.mbpform.value.ffinal){
      this.mbpform.value.ffinal = this.mbpform.value.finicio
    }
     
    
    this.aps.getMetricsPesonalizado({
      finicio:this.mbpform.value.finicio.toLocaleDateString(),
      ffinal:this.mbpform.value.ffinal.toLocaleDateString(),
      usuarios:this.mbpform.value.usuarios
    })
  }




}
