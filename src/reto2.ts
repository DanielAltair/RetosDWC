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