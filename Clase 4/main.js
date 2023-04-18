/* 
estructura de una funcion

function nombreFuncion(){
  codigo a ejecutar por la funcion
}
*/

// function saludar() {
//   let apellido = prompt("Ingrese su apellido");
//   let mensaje = `Hola ${apellido}`;
//   alert(mensaje);
// }

// saludar();

/* 
estructura de una funcion con parametros

function nombreFuncion(parm1, parm2, ..., parmn){
  codigo de la funcion
}
*/

// function saludar(saludo, nombre){
//   let mensaje = `${saludo} ${nombre}`;
//   console.log(mensaje);
// }

// saludar("Bienvenido", "andres");
// saludar("Hola", "camila");

// function sumar(num1, num2) {
//   alert(num1 + num2);
// }

// let numero1 = parseInt(prompt("Ingrese el numero"));
// let numero2 = parseInt(prompt("Ingrese el numero"));
// sumar(numero1, numero2);

// function sumar(num1, num2) {
//   return num1 + num2;
// }

// let suma = sumar(5, 6);
// console.log(suma);

// function saludar(){
//   console.log("hola");
//   return
//   console.log("chao");
// }

// saludar();

// function calculadora(num1, num2, operacion) {
//   switch (operacion) {
//     case "+":
//       return num1 + num2;
//       break;

//     case "-":
//       return num1 - num2;
//       break;

//     case "*":
//       return num1 * num2;
//       break;

//     case "/":
//       return num1 / num2;
//       break;

//     default:
//       return "Operacion no encontrada";
//       break;
//   }
// }

// let numero1 = parseInt(prompt("Ingrese el numero"));
// let numero2 = parseInt(prompt("Ingrese el numero"));
// let operacion = prompt("Ingrese la operacion");

// let resultado = calculadora(numero1, numero2, operacion);
// if (resultado === "Operacion no encontrada") {
//   alert("lo que guistes");
// } else {
//   alert(`El resultado es ${resultado}`);
// }

// let resultado = 0;

// function sumar(num1, num2){
//   resultado = num1 + num2;
// }

// sumar(5, 7);
// console.log(resultado);

// function sumar(num1, num2){
//   let resultado = num1 + num2;
//   return resultado;
// }

// function restar(num1, num2){
//   let resultado = num1 - num2;
//   return resultado;
// }

// const suma = function (a, b) {
//   return a + b;
// };

// console.log(suma(6, 8));

// const suma = (a, b) => {
//   return a + b;
// };

// console.log(suma(4, 5));

// const nombre = x => console.log(x);
// const resta = (a, b) => a - b;

// sumar(3, 4);

// function sumar(x, y){
//   console.log(x + y);
// }
// sumar(3, 4);

// const sumar = (x, y) => {
//   console.log(x + y);
// };

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = x => x * 0.21;

const precioProducto = 1000;
const descuento = 10;

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
                // = resta(suma(1000, iva(1000)), 10);
                // = resta(suma(1000, 210), 10);
                // = resta(1210, 10);
                // = 1200;
