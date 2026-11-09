"use strict";
const usuarioValido = {
    id: 1,
    username: "ana",
    email: "ana@example.com",
    rol: "admin",
    token: "abc123",
};
const misTareas = [
    { id: 1, descripcion: "Estudiar TypeScript", completada: false },
    { id: 2, descripcion: "Practicar interfaces", completada: false },
    { id: 3, descripcion: "Repasar arrays", completada: true },
];
function completarTarea(lista, idBuscar) {
    return lista.map((tarea) => tarea.id === idBuscar ? { ...tarea, completada: true } : tarea);
}
const tareasActualizadas = completarTarea(misTareas, 1);
//Reto 3
class ProductComponent {
    nombreProducto;
    precioBase;
    iva = 0.21;
    constructor(nombreProducto, precioBase) {
        this.nombreProducto = nombreProducto;
        this.precioBase = precioBase;
    }
    obtenerPrecioFinal() {
        return this.precioBase * (1 + this.iva);
    }
}
const producto = new ProductComponent("Teclado", 50);
console.log(producto.nombreProducto);
console.log(producto.obtenerPrecioFinal());
function procesarRespuesta(res) {
    if (res.status === "success") {
        res.data?.forEach((texto) => console.log(texto));
    }
    else if (res.mensajeError) {
        console.log(res.mensajeError);
    }
}
const respuestaCorrecta = {
    status: "success",
    data: ["Ana", "Luis"],
};
const respuestaConError = {
    status: "error",
    mensajeError: "No se pudo cargar la respuesta",
};
procesarRespuesta(respuestaCorrecta);
procesarRespuesta(respuestaConError);
//Reto 5
class ServicioDatos {
    endpoint;
    constructor(endpoint) {
        this.endpoint = endpoint;
    }
    conectar() {
        console.log("Conectando a " + this.endpoint);
    }
}
class ServicioUsuarios extends ServicioDatos {
    entidad = "usuarios";
    constructor(endpoint) {
        super(endpoint);
    }
}
//Enlace con HTML
const servicio = new ServicioUsuarios("https://api.ejemplo.com");
servicio.conectar();
console.log(servicio.entidad);
const reto1 = document.querySelector("#reto-1");
const reto2 = document.querySelector("#reto-2");
const reto3 = document.querySelector("#reto-3");
const reto4 = document.querySelector("#reto-4");
const reto5 = document.querySelector("#reto-5");
if (reto1) {
    reto1.textContent =
        `${usuarioValido.username} — ${usuarioValido.email} — rol: ${usuarioValido.rol}`;
}
if (reto2) {
    reto2.textContent = tareasActualizadas
        .map((tarea) => `${tarea.descripcion}: ${tarea.completada ? "Completada" : "Pendiente"}`)
        .join("\n");
}
if (reto3) {
    reto3.textContent =
        `${producto.nombreProducto}: ${producto.obtenerPrecioFinal().toFixed(2)} €`;
}
if (reto4) {
    reto4.textContent =
        `Respuesta: ${respuestaCorrecta.data?.join(", ")}\nError: ${respuestaConError.mensajeError}`;
}
if (reto5) {
    reto5.textContent =
        `Entidad: ${servicio.entidad}\nEndpoint: ${servicio.endpoint}`;
}
//# sourceMappingURL=app.js.map