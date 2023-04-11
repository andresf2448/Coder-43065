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

// let nombre = prompt("Ingrese el nombre");

// if(nombre != "" && (nombre === "andres" || nombre === "ANDRES")){
//   alert("Hola Andres");
// }else{
//   alert("Nombre incorrecto");
// }

//calculadora
//par o impar
//si un string contiene una palabra

// let numero1 = parseInt(prompt("Ingrese el primer número"));
// let numero2 = parseInt(prompt("Ingrese el segundo número"));
// let operacion = prompt("Ingrese la operacion");

// if(operacion === "+"){
//   let resultado = numero1 + numero2;
//   alert(resultado);
// }else if(operacion === "-"){
//   let resultado = numero1 - numero2;
//   alert(resultado);
// }else if(operacion === "/"){
//   let resultado = numero1 / numero2;
//   alert(resultado);
// }else{
//   let resultado = numero1 * numero2;
//   alert(resultado);
// }

// let numero1 = parseInt(prompt("Ingrese el primer numero"));
// let numero2 = parseInt(prompt("Ingrese el segundo numero"));
// let operacion = prompt("Que operacion desea realizar? Valor posibles: Suma, resta, multiplicación o division");

// if (numero1 === ""){
//   alert("Debe completar el primer numero");
// }else if (numero2 === ""){
//   alert("Debe completar el segundo numero");
// }else if (operacion === ""){
//   alert("Debe completar el nombre de la operación deseada")    
// }else if (operacion === "+"){
//   let resultado = numero1 + numero2;
//   alert(resultado);
// }else if (operacion === "-"){
//   let resultado = numero1 - numero2;
//   alert(resultado);
// }else if (operacion === "*"){
//   let resultado = numero1 * numero2;
//   alert(resultado);
// }else if (operacion === "/"){
//   let resultado = numero1 / numero2;
//   alert(resultado);
// }else {
//   alert("Debe ingresar una operacion valida")
// }

let numero1 = parseInt(prompt ("ingrese n1"));
let numero2 = parseInt(prompt ("ingrese n2"));
let operacion = prompt("ingrese la operacion");

if (operacion === "+") {
  let resultado = numero1 + numero2;
  alert (resultado);
}else if (operacion === "-") {
  let resultado = numero1 - numero2;
  alert (resultado);
}else if (operacion === "/") {
  let resultado = numero1 / numero2;
  alert (resultado);
}else {
  let resultado = numero1 * numero2;
  alert (resultado);
}