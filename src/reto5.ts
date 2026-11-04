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

const servicio = new ServicioUsuarios("https://api.ejemplo.com");
servicio.conectar();
console.log(servicio.entidad);