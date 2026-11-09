interface UsuarioAPI {
    id: number;
    username: string;
    email: string;
    rol: "admin" | "editor" | "alumno";
    token?: string;
}
declare const usuarioValido: UsuarioAPI;
interface Tarea {
    id: number;
    descripcion: string;
    completada: boolean;
}
declare const misTareas: Tarea[];
declare function completarTarea(lista: Tarea[], idBuscar: number): Tarea[];
declare const tareasActualizadas: Tarea[];
declare class ProductComponent {
    nombreProducto: string;
    private precioBase;
    private readonly iva;
    constructor(nombreProducto: string, precioBase: number);
    obtenerPrecioFinal(): number;
}
declare const producto: ProductComponent;
type RespuestaServidor = {
    status: "success";
    data?: string[];
    mensajeError?: never;
} | {
    status: "error";
    mensajeError?: string;
    data?: never;
};
declare function procesarRespuesta(res: RespuestaServidor): void;
declare const respuestaCorrecta: RespuestaServidor;
declare const respuestaConError: RespuestaServidor;
declare class ServicioDatos {
    endpoint: string;
    constructor(endpoint: string);
    conectar(): void;
}
declare class ServicioUsuarios extends ServicioDatos {
    entidad: string;
    constructor(endpoint: string);
}
declare const servicio: ServicioUsuarios;
declare const reto1: HTMLPreElement | null;
declare const reto2: HTMLPreElement | null;
declare const reto3: HTMLPreElement | null;
declare const reto4: HTMLPreElement | null;
declare const reto5: HTMLPreElement | null;
//# sourceMappingURL=app.d.ts.map