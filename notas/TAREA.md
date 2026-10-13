# Tarea: Resgistro de notas de estudiantes 
  
## Componente elegido 
  Registro de Notas de Estudiantes con cálculo automático de promedio, filtro en tiempo real por nombre y estado de aprobación.

## Version 1: solo DOM 
```javascript
// Renderizado básico de un estudiante inicial en el DOM
const lista = document.querySelector("#listaEstudiantes");
const li = document.createElement("li");
li.textContent = "Juan Pérez - Promedio: 15.00 (Aprobado)";
lista.appendChild(li);
```

## Version 2: con eventos 
```javascript
formEstudiante.addEventListener("submit", (e) => {
  e.preventDefault();
  if (nombreEstudiante.value === "") {
    mensajeError.textContent = "El nombre del estudiante no puede estar vacío";
    return;
  }
});

filtroEstudiante.addEventListener("input", () => {
  // Filtrar lista por nombre
});
```

## Version 3: con clases y objetos 
```javascript
class Estudiante {
  constructor(id, nombre, nota1, nota2) {
    this.id = id;
    this.nombre = nombre;
    this.nota1 = nota1;
    this.nota2 = nota2;
  }

  calcularPromedio() {
    return (this.nota1 + this.nota2) / 2;
  }

  estado() {
    return this.calcularPromedio() >= 11 ? "Aprobado" : "Desaprobado";
  }

  obtenerTexto() {
    return `${this.nombre} - Promedio: ${this.calcularPromedio().toFixed(2)} (${this.estado()})`;
  }
}
```
  
## Donde uso DOM, eventos y objetos
| Pieza | Linea de tu codigo donde aparece | Para que sirve | 
|-------|----------------------------------|----------------| 
| DOM |document.querySelector("#listaEstudiantes") / createElement("li")|Selecciona y crea los nodos visuales en la página web.| 
| Evento |formEstudiante.addEventListener("submit", ...) / input / click|Detecta las acciones del usuario e invoca las funciones en respuesta.| 
| Objeto |const nuevoEstudiante = new Estudiante(...)|Instancia objetos que guardan los datos y calculan el promedio.| 

  
## Pruebas realizadas 
| Accion | Resultado Esperado | Resultado Final |Cumple (Si/No)|
|-------|----------------------------------|----------------|-------|
| Enviar con nombre vacío |"El nombre del estudiante no puede estar vacío"|Aparece mensaje en rojo|Si|
| Ingresar una nota mayor a 20 |"Las notas deben estar entre 0 y 20"|Bloquea el envío y muestra aviso|Si|
| Registrar a "Camila" con notas 16 y 17 |Calcular promedio 16.50 y mostrar "Aprobado"|Se agrega correctamente en verde|Si|
| Escribir "Cami" en el buscador |Filtrar la lista mostrando únicamente a Maria|Muestra solo los registros coincidentes|Si|
| Hacer clic en "Eliminar" |Quitar al estudiante seleccionado de la lista|El registro se borra inmediatamente|Si|

## Por que disene asi mi clase 
Diseñé la clase Estudiante agrupando los atributos id, nombre, nota1 y nota2 para identificar a cada alumno y guardar sus datos en un solo lugar. Agregué los métodos calcularPromedio() y estado() para que la clase procese sus propios cálculos, evitando mezclar la lógica de negocio con la manipulación de la pantalla (DOM).