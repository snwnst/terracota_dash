import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppRepository } from './app.repository';
import { Observable } from 'rxjs';
import { Terra_aeropuerto } from './app.model';

@Injectable({
    providedIn: 'root'
})

export class AppService {

    public session: Boolean
    public monit: Boolean


    public resumenaplicativosdiario: Observable<any[]>;
    public radc: Observable<any[]>;
    public radp: Observable<any[]>;
    public allnow: Observable<any[]>;
    public indicadores: Observable<any[]>;

    public users:Observable<any[]>;
    
    public data_aeropuerto_compromisos: Observable<Terra_aeropuerto[]>;


    public usuarios: Observable<any[]>;

    constructor(
        private repo: AppRepository,
        private router: Router
    ) {
        this.session = JSON.parse(sessionStorage.getItem("session"));
        this.monit = false;

    }

    public login(data): void {
        this.repo.post("sag/Account/V1/Login", data, "Iniciando sesión", "Espere un momento").then(response => {

            if (response == "ERROR") {
                this.session = false
                sessionStorage.clear()
            } else {
                sessionStorage.setItem("token", response.token)
                this.session = true
                this.router.navigate(["/dashboard"])
            }
        })
    }

    public getStatusSession(): void {
        this.repo.get("sag/Account/V1/GetStatusSession", null, "Validando sesión", "Espere un momento").then(response => {
            if (response == "ERROR") {
                this.session = false
                sessionStorage.clear()
            } else {
                this.session = true
            }
        })
    }

    public getUsers(): void {
        this.repo.get("sag/User/V1", null, "Obteniendo usuarios ", "Espere un momento").then(response => {
            this.users = Observable.of(response);
        })
    }

    public getMetricsClean(): any {
        return this.repo.get("smu/metricas/resumenactividadesdiario/", null, "Obteniendo datos sobre pc's", "Espere un momento").then(response => {
            this.resumenaplicativosdiario =  Observable.of(response);
            console.log(response);
            
        })
    }

    public getMetricsCleanCahrt(): any {
        return this.repo.get("smu/metricas/resumenactividadesdiariochart/", null, "Obteniendo datos historicos sobre pc's", "Espere un momento").then(response => {
           this.radc = Observable.of(response);
        })
    }

    public getMetricsCleanPie(): any {
        return this.repo.get("smu/metricas/resumenaactividadesdiariochartpie/", null, "Obteniendo datos historicos sobre pc's", "Espere un momento").then(response => {
           this.radp = Observable.of(response);
        })
    }

    public getMetricsCleanAll(): any {
        return this.repo.get("smu/metricas/allnowactividades/", null, "Obteniendo datos historicos sobre pc's", "Espere un momento").then(response => {
           this.allnow = Observable.of(response);
           console.log(response);
           
        })
    }

    public getIndicadores(): any {
        return this.repo.get("smu/metricas/getindicadores/", null, "Obteniendo datos historicos sobre pc's", "Espere un momento").then(response => {
           this.indicadores = Observable.of(response);       
        })
    }

    public getMetricsPesonalizado(data): any {
        return this.repo.post("smu/metricas/personalizado/", data, "Obteniendo datos historicos sobre pc's", "Espere un momento").then(response => {
            console.log(response)
            
        })
    }

    public getAeropuetoCompromisos(): any {
        return this.repo.get("smu/aeropuerto/getdocs/", null, "Obteniendo datos sobre pc's", "Espere un momento").then(response => {
            this.data_aeropuerto_compromisos = Observable.of(response)
        })
    }

    public logout(): void {
        sessionStorage.clear()
        this.session = false
    }


}
