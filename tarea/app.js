// Clase que representa a un Estudiante
class Estudiante {
  constructor(id, nombre, nota1, nota2) {
    this.id = id;
    this.nombre = nombre;
    this.nota1 = nota1;
    this.nota2 = nota2;
  }

  // Método para calcular el promedio
  calcularPromedio() {
    return (this.nota1 + this.nota2) / 2;
  }

  // Método para determinar el estado (Aprobado / Desaprobado)
  estado() {
    return this.calcularPromedio() >= 11 ? "Aprobado" : "Desaprobado";
  }

  // Método de descripción formateada
  obtenerTexto() {
    return `${this.nombre} - Promedio: ${this.calcularPromedio().toFixed(2)} (${this.estado()})`;
  }
}

// Seleccionar elementos del DOM
const formEstudiante = document.querySelector("#formEstudiante");
const nombreEstudiante = document.querySelector("#nombreEstudiante");
const nota1 = document.querySelector("#nota1");
const nota2 = document.querySelector("#nota2");
const mensajeError = document.querySelector("#mensajeError");
const listaEstudiantes = document.querySelector("#listaEstudiantes");
const filtroEstudiante = document.querySelector("#filtroEstudiante");

let estudiantes = [];

// Evento 1: Submit (Agregar estudiante con validación de notas)
formEstudiante.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const nombre = nombreEstudiante.value.trim();
  const valNota1 = Number(nota1.value);
  const valNota2 = Number(nota2.value);

  // Validación de datos requeridos
  if (nombre === "") {
    mensajeError.textContent = "El nombre del estudiante no puede estar vacío";
    return;
  }

  if (isNaN(valNota1) || isNaN(valNota2) || nota1.value === "" || nota2.value === "") {
    mensajeError.textContent = "Ingresa ambas notas correctamente";
    return;
  }

  if (valNota1 < 0 || valNota1 > 20 || valNota2 < 0 || valNota2 > 20) {
    mensajeError.textContent = "Las notas deben estar entre 0 y 20";
    return;
  }

  mensajeError.textContent = "";

  const nuevoEstudiante = new Estudiante(Date.now(), nombre, valNota1, valNota2);
  estudiantes.push(nuevoEstudiante);
  
  renderizarEstudiantes(estudiantes);
  formEstudiante.reset();
});

// Evento 2: Input (Filtrar estudiantes en tiempo real por nombre)
filtroEstudiante.addEventListener("input", () => {
  const busqueda = filtroEstudiante.value.toLowerCase();
  const filtrados = estudiantes.filter(e => e.nombre.toLowerCase().includes(busqueda));
  renderizarEstudiantes(filtrados);
});

// Función para renderizar lista en el DOM
function renderizarEstudiantes(lista) {
  listaEstudiantes.innerHTML = "";

  lista.forEach(est => {
    const li = document.createElement("li");
    li.textContent = est.obtenerTexto();
    
    // Asignar clase de color según el estado
    li.classList.add(est.calcularPromedio() >= 11 ? "aprobado" : "desaprobado");

    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Eliminar";
    btnBorrar.classList.add("btn-borrar");

    // Evento 3: Click (Eliminar registro)
    btnBorrar.addEventListener("click", () => {
      estudiantes = estudiantes.filter(e => e.id !== est.id);
      renderizarEstudiantes(estudiantes);
    });

    li.appendChild(btnBorrar);
    listaEstudiantes.appendChild(li);
  });
}