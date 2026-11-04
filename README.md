# Reto 1: Contrato de la API

La interfaz `UsuarioAPI` define los datos que debe tener un usuario recibido de la API.
El campo `rol` solo permite `admin`, `editor` o `alumno`, y `token` es opcional.

En `src/reto1.ts` hay un usuario válido y un ejemplo comentado con un rol no permitido.

## Reto 2: Inmutabilidad con tareas

`completarTarea` usa `map` para devolver un array nuevo. La tarea indicada se copia con `completada: true`; la lista original no se modifica.