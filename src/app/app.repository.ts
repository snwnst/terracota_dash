import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})

export class AppRepository {

    constructor(
        @Inject('api_url')
        public api: string,
        public http: HttpClient
    ) {

    }

    public post(_path: string, _body?, tittle?: string, text?: string): Promise<any> {
        return new Promise((resolve) => {
            Swal.fire({
                title: tittle,
                text: text,
                onBeforeOpen: () => {
                    Swal.showLoading();
                    this.http.post(
                        `${this.api}/${_path}`,
                        _body,
                        { headers: this.geHeaders() }
                    ).subscribe(
                        data => { Swal.close(); resolve(data) },
                        error => { this.swalError(error); resolve("ERROR") }
                    )
                }
            })
        })
    }

    public get(_path: string, _body?, tittle?: string, text?: string): Promise<any> {
        return new Promise((resolve) => {
            Swal.fire({
                title: tittle,
                text: text,
                onBeforeOpen: () => {
                    Swal.showLoading();
                    this.http.get(
                        `${this.api}/${_path}`,
                        { headers: this.geHeaders() }
                    ).subscribe(
                        data => { Swal.close(); resolve(data) },
                        error => { this.swalError(error); resolve("ERROR") }
                    )
                }
            })
        })
    }

    public geHeaders(): any {
        return {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }
    }

    private swalError(error) {
        Swal.fire({
            icon: 'error',
            title: error.statusText,
            text: error.message
        })
    }


}
