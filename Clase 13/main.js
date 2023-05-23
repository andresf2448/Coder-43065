// let nombre1 = "juan";
// let nombre2 = nombre1;

// nombre2 = "felipe";
// console.log(nombre1);

// let objeto1 = { nombre: "mariana", edad: 45 };
// let objeto2 = {...objeto1};

// objeto2.nombre = "camila";
// console.log(objeto1);

// const nombres = ["Braian", "Angeles", "Andrés"];

// console.log(...nombres);

// const numeros = [1, 4, 5, 8, 3, 2];

// console.log(Math.max(...numeros));
// console.log(Math.min(...numeros));

// const nombres1 = ["pepito", "pepita"];
// const nombres2 = ["Braian", "Angeles", "Andrés"];

// const nombres = [...nombres1, ...nombres2];

// console.log(nombres);

// const usuario1 = {
//   nombre: "juan",
//   edad: 34,
// };

// const usuario2 = {
//   ...usuario1,
//   nombre: "pepito",
//   curso: "javascript"
// }

// console.log(usuario2);

// function sumar(...numeros) {
//   console.log(numeros);
// }

// sumar(4, 3, 5, 7, 9, 4, 1);

// function sumar(...numeros) {
//   return numeros.reduce((acum, item) => acum + item, 0);
// }

// console.log(sumar(2, 5, 4, 6, 87, 9));
// console.log(sumar(2, 5, 4, 6));

/* 
if(condicion1){
  codigo en caso de la condicion1 sea verdadera
}else if(condicion2){
  codigo en caso de que la condicion2 sea verdadera
}else{
  codigo cuando ninguna de las condiciones es verdadera
}
*/

/* let entrada = prompt("INgrese el usuario");

while (entrada != "pepito") {
  alert("usuario incorrecto");
  entrada = prompt("INgrese el usuario");
}

alert("Bienvenido"); */

// function sumar(x, y) {
//   return x + y;
// }

// const resta = (x, y) => x - y;

// function Persona(nombre, edad) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.hablar = function(){console.log(`Hola soy ${this.nombre}`);}
// }

// class Persona {
//   constructor(nombre, edad) {
//     this.nombre = nombre;
//     this.edad = edad;
//   }
// }

// const persona1 = new Persona("pepito", 34);
// const persona2 = new Persona("maria", 23);

// forEach
// map
// filter
// find

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputs = e.target.children; // aá están todos los inputs

  console.log(inputs[0].value);
  console.log(inputs[1].value);
});
