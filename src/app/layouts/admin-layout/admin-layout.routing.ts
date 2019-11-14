import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { MonitoreoComponent } from 'app/monitoreo/monitoreo.component';
import { AeropuertoComponent } from 'app/aeropuerto/aeropuerto.component';
import { BusquedaComponent } from 'app/busqueda/busqueda.component';
import { GeneracionComponent } from 'app/generacion/generacion.component';
import { PaneladminComponent } from 'app/paneladmin/paneladmin.component';
import { NotificacionesComponent } from 'app/notificaciones/notificaciones.component';



export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'monitoreo',      component: MonitoreoComponent },
    { path: 'aeropuerto',     component: AeropuertoComponent },
    { path: 'busqueda',       component: BusquedaComponent },
    { path: 'generacion',     component: GeneracionComponent },
    { path: 'paneladmin',     component: PaneladminComponent },
    { path: 'notificaciones', component: NotificacionesComponent }
];
