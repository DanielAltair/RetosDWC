# Reto 1: Contrato de la API

La interfaz `UsuarioAPI` define los datos que debe tener un usuario recibido de la API.
El campo `rol` solo permite `admin`, `editor` o `alumno`, y `token` es opcional.

En `src/reto1.ts` hay un usuario válido y un ejemplo comentado con un rol no permitido.

## Reto 2: Inmutabilidad con tareas

`completarTarea` usa `map` para devolver un array nuevo. La tarea indicada se copia con `completada: true`; la lista original no se modifica.

## Reto 3: Clase y encapsulación

`ProductComponent` mantiene privados el precio base y el IVA fijo del 21 %. El nombre se recibe en el constructor y el precio final se obtiene con `obtenerPrecioFinal()`.

## Reto 4: Control de errores

`RespuestaServidor` distingue las respuestas exitosas de las respuestas con error mediante `status`. `procesarRespuesta` recorre `data` solo si existe y muestra `mensajeError` cuando está disponible.

## Reto 5: Herencia y super()

`ServicioUsuarios` extiende `ServicioDatos`. Su constructor pasa `endpoint` a la clase padre con `super(endpoint)` y define `entidad` como `"usuarios"`.