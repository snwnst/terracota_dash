import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.services';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/monitoreo', title: 'Monitoreo',  icon:'computer', class: '' },
    { path: '/aeropuerto', title: 'Aeropuerto',  icon:'flight_land', class: '' },
    { path: '/busqueda', title: 'Busqueda',  icon:'search', class: '' },
    { path: '/generacion', title: 'Generación',  icon:'bubble_chart', class: '' },
    { path: '/paneladmin', title: 'Panel de administración',  icon:'settings_applications', class: '' },
    { path: '/notificaciones', title: 'Notificaciones',  icon:'notifications', class: '' },
    { path: '/logout', title: 'Cerrar sesión',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(public aps: AppService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

  islogout(data){
    if (data == "/logout") {
      this.aps.logout()
      
    }
    
  }
}
