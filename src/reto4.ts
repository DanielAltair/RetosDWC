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