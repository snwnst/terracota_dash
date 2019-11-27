import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Terra_aeropuerto } from 'app/app.model';
import { AppService } from 'app/app.services';

@Injectable({
  providedIn: 'root'
})

export class AeropueroForm {

    public aeropuertoBaseElement: Terra_aeropuerto;
    public aeropuertoBaseFormGroup: FormGroup;

    constructor(
        public formBuilder: FormBuilder,
        public apis: AppService
    ){
        this.aeropuertoBaseElement = new Terra_aeropuerto(null);
        this.createCapturaAeropuertoBaseFrom(null);
    }

    createCapturaAeropuertoBaseFrom(value) {
        this.aeropuertoBaseElement = new Terra_aeropuerto(value);
        this.aeropuertoBaseFormGroup = this.formBuilder.group({
            usuario: [this.aeropuertoBaseElement.usuario, [Validators.required]],
            email: [this.aeropuertoBaseElement.email, [Validators.required]],
        });
    }


    


}