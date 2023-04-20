// let nombre = "pepito";
// let edad = 45;
// let direccion = "AV";

/* 
estructura de un objeto

{clave1: valor1, clave2: valor2, ..., claven: valorn}
*/

// const persona1 = {
//   nombre: "pepito",
//   edad: 45,
//   direccion: "AV",
// };

// const persona2 = {
//   nombre: "pepita",
//   edad: 40,
//   direccion: "AV1",
// };

// let clave = "nombre";

// console.log(persona1.nombre);
// console.log(persona1.edad);
// console.log(persona1.direccion);

// console.log(persona1[clave]);
// console.log(persona1["edad"]);
// console.log(persona1["direccion"]);
// console.log(persona2["nombre"]);

// persona1.edad = 10;
// persona1["nombre"] = "andres";
// persona1.telefono = 1234;
// persona1["madre"] = true;
// console.log(persona1);

// function Persona(nombrePersona, edadPersona, direccionPersona){
//   this.nombre = nombrePersona;
//   this.edad = edadPersona;
//   this.direccion = direccionPersona;
// }

// const persona1 = new Persona("pepito", 45, "AV");
// const persona2 = new Persona("pepita", 40, "AV");
// console.log(persona1.nombre);
// console.log(persona2.nombre);

// function Persona(info) {
//   this.nombre = info.nombre;
//   this.edad = info.edad;
//   this.direccion = info.direccion;
//   this.peso = info.peso;
//   this.altura = info.altura;
// }

// let info = {
//   nombre: "pepito",
//   direccion: "AV",
//   peso: 55,
//   edad: 45,
//   altura: 1.8,
// };

// const persona1 = new Persona(info);

// console.log(persona1);

// function Producto(nombre, precio, imagen){
//   this.nombre = nombre;
//   this.precio = precio;
//   this.imagen = imagen;
// }

// const producto1 = new Producto("Monitor Gamer ..", 290720, "http:asjdhflkasjhdf");
// const producto2 = new Producto("Monitor Ultrawide ..", 1384751, "http:kluyhgoiu");

// console.log(producto1);
// console.log(producto2);

// function Persona(nombrePersona, edadPersona, direccionPersona) {
//   this.nombre = nombrePersona;
//   this.edad = edadPersona;
//   this.direccion = direccionPersona;
//   this.hablar = function(){console.log(`Hola soy ${this.nombre}`)}
// }

// const persona1 = new Persona("pepito", 45, "AV");
// persona1.hablar();

// function Producto(nombre, precio, imagen){
//   this.nombre = nombre;
//   this.precio = precio;
//   this.imagen = imagen;
// }

// const producto1 = new Producto("Monitor Gamer ..", 290720, "http:asjdhflkasjhdf");

// for(const clave in producto1){
//   console.log("clave", clave);
//   console.log("valor", producto1[clave]);
// }

/* class Persona{
  constructor(nombre, edad, direccion){
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;
  }

  hablar(){
    console.log(`Hola soy ${this.nombre}`);
  }
}

const persona1 = new Persona("pepito", 45, "AV");
console.log(persona1); */

// class Producto {
//   constructor(nombre, precio) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.vendido = false;
//   }

//   vender(){
//     this.vendido = true;
//   }
// }

// const producto1 = new Producto("Televisor", 1000);
// const producto2 = new Producto("Televisor1", 10001);
// console.log(producto1);
// producto1.vender();
// console.log(producto1);
// console.log(producto2);

class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  vender(){
    this.cantidad -= 1; // this.cantidad = this.cantidad - 1
  }
}

const producto1 = new Producto("Televisor", 1000, 5);
const producto2 = new Producto("Televisor1", 10001, 5);
console.log(producto1);
producto1.vender();
console.log(producto1);
console.log(producto2);