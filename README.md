## Autor: Daniel Izquierdo Cuevas

# Retos de TypeScript

Proyecto de práctica con cinco retos de TypeScript: modelado de datos, arrays inmutables, clases, control de errores y herencia. El proyecto compila el código localmente y muestra los resultados en una página HTML.

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-not%20specified-lightgrey)

## Tabla de contenidos

- [Características](#características)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Configuración](#configuración)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

## Características

- Cinco ejercicios de TypeScript en un único archivo: `src/app.ts`.
- Tipado estricto con interfaces, tipos unión y propiedades privadas.
- Compilación automática en modo vigilancia con `tsc --watch`.
- Visualización de los resultados en `src/index.html`, con estilos definidos en `src/styles.css`.

## Requisitos

- Node.js >= 18.0
- npm >= 9.0

## Instalación

Desde la carpeta raíz del proyecto, instala las dependencias:

```bash
npm install
```

## Uso

Desde la carpeta raíz, inicia el compilador en modo vigilancia:

```bash
npx tsc --watch
```

Mantén esa terminal abierta para que TypeScript vuelva a compilar al guardar cambios en `src/app.ts`. El JavaScript generado se guarda en `dist/app.js`.

Para ver la página, abre `src/index.html` con una extensión de servidor local, como Live Server de Visual Studio Code. La página carga el JavaScript compilado desde `dist/app.js`.

## Configuración

La configuración de TypeScript está en `tsconfig.json`:

| Opción | Descripción | Valor |
|---|---|---|
| `rootDir` | Carpeta de los archivos fuente | `./src` |
| `outDir` | Carpeta del JavaScript compilado | `./dist` |
| `module` | Formato de módulos para el navegador | `ES2020` |
| `strict` | Activa la comprobación estricta de tipos | `true` |

No se necesita un archivo `.env` para este proyecto.

## Contribuir

Las mejoras y correcciones son bienvenidas. Para proponer cambios:

1. Haz un fork del repositorio.
2. Crea una rama para tu cambio (`git checkout -b feature/nueva-funcionalidad`).
3. Guarda los cambios en un commit (`git commit -m "Añadir nueva funcionalidad"`).
4. Sube la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

El proyecto todavía no especifica una licencia.
