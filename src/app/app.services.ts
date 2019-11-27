import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppRepository } from './app.repository';
import { MsalService } from '@azure/msal-angular';
import { Observable } from 'rxjs';
import { Terra_aeropuerto } from './app.model';

@Injectable({
    providedIn: 'root'
})

export class AppService {

    public session: Boolean

    public metricsClean: Observable<any[]>;
    public data_aeropuerto_compromisos: Observable<Terra_aeropuerto[]>;

    public usuarios: Observable<any[]>;

    constructor(
        private repo: AppRepository,
        private router: Router
    ) {
        this.session = JSON.parse(sessionStorage.getItem("session"));
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
            console.log(response);
        })
    }

    public getMetricsClean(): any {
        return this.repo.get("smu/metricas/metricasclean/", null, "Obteniendo datos sobre pc's", "Espere un momento").then(response => {
            this.metricsClean = Observable.of(response)
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
