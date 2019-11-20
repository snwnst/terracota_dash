import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.services';

@Component({
  selector: 'app-aeropuerto',
  templateUrl: './aeropuerto.component.html',
  styleUrls: ['./aeropuerto.component.scss']
})
export class AeropuertoComponent implements OnInit {

  constructor(
    private aps: AppService,
   ) { 
    this.aps.getAeropuetoCompromisos()
  }

  ngOnInit() {

  }



}
