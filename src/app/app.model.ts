export class Terra_aeropuerto {
    constructor(object) {
        object = object || {};
        this.usuario = object.usuario || '';
        this.email = object.email || '';
        this.archivos_comprometidos = object.archivos_comprometidos || [];

    }

    public usuario: string;
    public email: string;
    public archivos_comprometidos: [Aarchivo_comprometido]

}

export class Aarchivo_comprometido {
    constructor(object?) {
        object = object || {};
        this.titulo = object.usuatitulorio || '';
        this.descripcion = object.descripcion || '';
        this.tipo = object.tipo || '';
        this.periodos_entrega = object.periodos_entrega || []
    }

    public titulo: string;
    public descripcion: string;
    public tipo: string;
    public periodos_entrega: [Periodo_entrega]

}

export class Periodo_entrega {
    constructor(object?) {
        object = object || {};
        this.periodo = object.periodo || '';
        this.fecha_inicio = object.fecha_inicio || '';
        this.dia = object.dia || '';
    }

    public periodo: string;
    public fecha_inicio: string;
    public dia: string;
}

export class Login {
    constructor(object?) {
        object = object || {};
        this.username = object.username || '';
        this.password = object.password || '';
    }
    
    public username: string;
    public password: string;
}

