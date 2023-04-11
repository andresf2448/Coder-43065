/* 
estructura del condicional if

if(condicion){
  codigo a ejecutar en caso de que la condicion sea verdadera
}
*/

/* 
= asignación
== comparación solo de valor
=== comparación tanto de valor como de tipo de dato
*/

// if(false){
//   console.log("hola");
// }

// let numero = 6;

// if(numero === 5){
//   console.log("entramos");
// }

// let nombre = prompt("Ingrese su nombre");

// if(nombre === "pepito"){
//   alert("Bienvenido pepito");
// }

/* 
estructura del if else
if(condicion){
  codigo a ejecutar en caso de que la condicion sea verdadera
}else{
  codigo a ejecutar en caso de que la condicion no sea verdadera
}
*/

/* let respuesta = prompt("Terminaste la tarea?");

if (respuesta.toLowerCase() === "si") {
  alert("Puede salir a jugar");
} else {
  alert("No puede salir a jugar");
}
 */

/* 
estructura del if else if

if(condicion1){
  codigo a ejecutar cuando la condicion1 es verdadera  
}else if(condicion2){
  codigo a ejecutar cuando la condicion2 es verdadera  
}else{
  codigo a ejecutar cuando ninguna de las condiciones es verdadera
}
*/

// let edad = parseInt(prompt("Ingrese su edad"));

// if(edad < 0){
//   alert("tremendo problema");
// }else if(edad <= 14){
//   alert("No puedes entrar");
// }else if(edad < 18){
//   alert("Puedes entrar con un acompañante");
// }else if(edad < 25){
//   alert("Puedes entrar a la fiesta");
// }else{
//   alert("No puedes entrar");
// }

/* 
operador1 && operador2 es verdadera cuando ambos operadores son verdaderos, en caso contrario es false

operador1 || operador2 es verdadero cuando al menos uno de los operadores es verdadero, en caso contrario es falso
*/

/* let nombre = prompt("Ingrese el nombre");
let apellido = prompt("Ingrese el apellido");

if(nombre != "" && apellido != ""){
  let mensaje = "Hola " + nombre + " " + apellido;
  alert(mensaje);
} */

// let nombre = prompt("Ingrese el nombre");

// if(nombre === "ANA" || nombre === "ana"){
//   alert("Bienvenida Ana");
// }else{
//   alert("NOmbre incorrecto");
// }

let nombre = prompt("Ingrese el nombre");

if(nombre != "" && (nombre === "andres" || nombre === "ANDRES")){
  alert("Hola Andres");
}else{
  alert("Nombre incorrecto");
}