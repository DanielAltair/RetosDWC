//Reto 1
interface UsuarioAPI {
  id: number;
  username: string;
  email: string;
  rol: "admin" | "editor" | "alumno";
  token?: string;
}

const usuarioValido: UsuarioAPI = {
  id: 1,
  username: "ana",
  email: "ana@example.com",
  rol: "admin",
  token: "abc123",
};

// Si quitas los comentarios, TypeScript marcará "invitado" como error:
// const usuarioInvalido: UsuarioAPI = {
//   id: 2,
//   username: "Luis",
//   email: "luis@example.com",
//   rol: "invitado",
// };

//Reto 2
interface Tarea {
  id: number;
  descripcion: string;
  completada: boolean;
}

const misTareas: Tarea[] = [
  { id: 1, descripcion: "Estudiar TypeScript", completada: false },
  { id: 2, descripcion: "Practicar interfaces", completada: false },
  { id: 3, descripcion: "Repasar arrays", completada: true },
];

function completarTarea(lista: Tarea[], idBuscar: number): Tarea[] {
  return lista.map((tarea) =>
    tarea.id === idBuscar ? { ...tarea, completada: true } : tarea
  );
}

const tareasActualizadas = completarTarea(misTareas, 1);


//Reto 3
class ProductComponent {
  private readonly iva = 0.21;

  constructor(
    public nombreProducto: string,
    private precioBase: number
  ) {}

  obtenerPrecioFinal(): number {
    return this.precioBase * (1 + this.iva);
  }
}

const producto = new ProductComponent("Teclado", 50);
console.log(producto.nombreProducto);
console.log(producto.obtenerPrecioFinal());

// Si descomentas esta línea, TypeScript marcará un error:
// console.log(producto.precioBase);


//Reto 4
type RespuestaServidor =
  | { status: "success"; data?: string[]; mensajeError?: never }
  | { status: "error"; mensajeError?: string; data?: never };

function procesarRespuesta(res: RespuestaServidor): void {
  if (res.status === "success") {
    res.data?.forEach((texto) => console.log(texto));
  } else if (res.mensajeError) {
    console.log(res.mensajeError);
  }
}

const respuestaCorrecta: RespuestaServidor = {
  status: "success",
  data: ["Ana", "Luis"],
};

const respuestaConError: RespuestaServidor = {
  status: "error",
  mensajeError: "No se pudo cargar la respuesta",
};

procesarRespuesta(respuestaCorrecta);
procesarRespuesta(respuestaConError);


//Reto 5
class ServicioDatos {
  constructor(public endpoint: string) {}

  conectar(): void {
    console.log("Conectando a " + this.endpoint);
  }
}

class ServicioUsuarios extends ServicioDatos {
  public entidad = "usuarios";

  constructor(endpoint: string) {
    super(endpoint);
  }
}

//Enlace con HTML
const servicio = new ServicioUsuarios("https://api.ejemplo.com");
servicio.conectar();
console.log(servicio.entidad);

const reto1 = document.querySelector<HTMLPreElement>("#reto-1");
const reto2 = document.querySelector<HTMLPreElement>("#reto-2");
const reto3 = document.querySelector<HTMLPreElement>("#reto-3");
const reto4 = document.querySelector<HTMLPreElement>("#reto-4");
const reto5 = document.querySelector<HTMLPreElement>("#reto-5");

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