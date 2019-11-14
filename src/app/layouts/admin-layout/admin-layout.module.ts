import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { MonitoreoComponent } from 'app/monitoreo/monitoreo.component';
import { AeropuertoComponent } from 'app/aeropuerto/aeropuerto.component';
import { BusquedaComponent } from 'app/busqueda/busqueda.component';
import { GeneracionComponent } from 'app/generacion/generacion.component';
import { PaneladminComponent } from 'app/paneladmin/paneladmin.component';
import { NotificacionesComponent } from 'app/notificaciones/notificaciones.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    MonitoreoComponent,
    AeropuertoComponent,
    BusquedaComponent,
    GeneracionComponent,
    PaneladminComponent,
    NotificacionesComponent,
  ]
})

export class AdminLayoutModule {}
