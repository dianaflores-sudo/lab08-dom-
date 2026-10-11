# Bitacora de JavaScript interactivo 
  
Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos. 
Navegador usado: (escribe aqui cual usaste) 
  
## Ejercicio 2: Seleccionar y modificar el DOM 
| Instruccion | Que cambio en la pantalla | Se mantiene al recargar (Si/No) | 
|-------------|---------------------------|---------------------------------| 
| textContent desde la consola |Cambio el titulo a "Mi primera pagina interactiva"|No| 
| textContent desde app.js |Cambio el titulo a "Hola TECSUP"|Si| 
| style.color |Se cambio el color del tipo a ("blue")|SI| 
| classList.add |Se agrego la clase "destacado" y puso el fondo de color amarillo.|Si| 
| createElement + appendChild |Agrego la etiqueta al final con el texto "JavaScript".|Si| 


## Ejercicio 3: Evento click 
| Tipo de evento | Que accion lo dispara | Cuanto suma por accion | 
|----------------|-----------------------|------------------------| 
| click |Hacer un clic simple sobre el botom ("Sumar 1")|1| 
| dblclick |Hacer doble clic rápido sobre el botón ("Sumar 1") |1 (por cada doble clic)| 
| mouseover | Pasar el cursor del mouse por encima del botón| 1 (cada vez que el cursor entra)| 


## Ejercicio 4: Eventos input y submit 
| Prueba | Que paso en la pantalla | Se recargo la pagina (Si/No) | 
|--------|-------------------------|------------------------------| 
| Escribir en el campo nombre |El mensaje de saludo actualiza su texto en tiempo real letra por letra|No| 
| Enviar sin preventDefault |El texto con el correo aparece solo un instante y desaparece|Si| 
| Enviar con preventDefault, correo sin @ |Muestra el mensaje en rojo: "Correo no valido: falta @"|No| 
| Enviar con preventDefault, correo con @ |Muestra el mensaje "Enviado: fdiana@gmail.com"|No| 

  
## Ejercicio 5: Clases y objetos 
| Objeto | nombre | precio | descripcion() | conDescuento(0.25) | 
|--------|--------|--------|---------------|--------------------| 
| laptop |Laptop|s/2500|Laptop - S/ 2500.00|s/1875| 
| mouse |Mouse|s/45|Mouse - S/ 45.00|s/33.75| 
| teclado |Teclado|s/120|Teclado - S/ 120.00|s/90| 
| monitor |Monitor|s/680|Monitor - S/ 680.00|s/510| 	


## Ejercicio 6: DOM, eventos y objetos juntos 
| Prueba | Total que muestra la pagina | Correcto (Si/No) | 
|--------|-----------------------------|------------------| 
| Cuaderno 12.50 |s/12.50|Si| 
| + Lapicero 3.20 |s/15.70|Si| 
| + Mochila 89.90 |s/105.60|Si| 
| Sin Number() |Error en consola|No| 
  
| Pieza | Linea de tu codigo donde aparece | Para que sirve | 
|-------|----------------------------------|----------------| 
| DOM |document.querySelector("#formProducto") / createElement("li") / appendChild(li)|Selecciona e interactúa con los elementos del HTML para modificar la interfaz.| 
| Evento |formProducto.addEventListener("submit", (evento) => { ... })|Guarda cuando el usuario envía el formulario y ejecuta el código en respuesta| 
| Objeto |const carrito = new Carrito(); / new Producto(...)|Almacena y gestiona los datos de los productos y calcula el total del carrito| 
