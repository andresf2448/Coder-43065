/* 
estructura de un arreglo

[elemento1, elemento2, ..., elementon];
*/

// const arregloVacio = [];
// const numeros = [1, 4, 2, 6, 77, 8];
// const nombres = ["andres", "juan", "camila", "Angel"];
// const valores = [true, false, false, true];
// const varios = [true, 1, "andres"];

// console.log(arregloVacio);
// console.log(numeros);
// console.log(nombres);
// console.log(valores);
// console.log(varios);

// const nombres = ["andres", "juan", "camila", "Angel"];

// console.log(nombres[2]);
// console.log(nombres[0]);

// const numeros = [1, 4, 2, 6, 77, 8];

// console.log(numeros[1] + numeros[4]);

// const nombres = ["andres", "juan", "camila", "Angel", "maria", "damian"];

// for(let index = 0; index < nombres.length; index++){
//   console.log(nombres[index]);
// }

//Métodos y propiedades de los arreglos
// const nombres = ["andres", "juan", "camila", "Angel", "maria", "damian"];
// // console.log(nombres.length); //longitud o cantidad de elementos en el arreglo

// nombres.push("mariana"); //agrega un elemento al final del arreglo
// console.log(nombres);

// nombres.unshift("felipe"); //agrega un elemento al principio del arreglo
// console.log(nombres);

// nombres.pop(); //quitar un elemento del final del arreglo
// console.log(nombres);

// nombres.shift(); //quitar un elemento del principio del arreglo
// console.log(nombres);

// const nombres = ["andres", "juan", "camila", "Angel", "maria", "damian"];
// // nombres.splice(1, 2); // elemina parte del arreglo dependiendo de los parametros pasados

// // console.log(nombres);

// console.log(nombres.join("*")); //genera un string con todos los elementos separados por lo indicado en el parametro

// const personas = ["angeles", "Nahuel", "Braian"];
// const mascotas = ["max", "firu"];
// const unidos = personas.concat(mascotas); //generar un array uniendo ambos arreglos
// console.log(unidos);

// const nombres = ["andres", "juan", "camila", "Angel", "maria", "damian"];
// const copia = nombres.slice(1, 5); // realiza un arreglo con una copia del arreglo original
// console.log(copia);

// console.log(nombres.indexOf("camila")); //busca la posicion de un elemento pasado por parametro uy si no lo encuentra retorna -1
// console.log(nombres.indexOf("camila Gomez"));

// const productos = ["camisa", "zapato", "gorra"];
// let nombre = prompt("Ingrese el nombre de un producto");

// if(productos.includes(nombre)){
//   alert("El producto se encuentra disponible");
// }else{
//   alert("El producto no se encuentra disponible");
// }

// const productos = ["camisa", "zapato", "gorra"];

// productos.reverse();
// console.log(productos);

// const nombres = ["andres", "juan", "camila", "Angel", "maria", "damian"];

// const eliminar = (nombre) => {
//   let index = nombres.indexOf(nombre);

//   if(index != -1){
//     nombres.splice(index, 1);

//     console.log(nombres);
//   }
// };

// eliminar("juan");

// const productos = [
//   { id: 1, nombre: "zapato mujer", precio: 1000 },
//   { id: 2, nombre: "camisa", precio: 1350 },
//   { id: 3, nombre: "gorra", precio: 750 },
//   { id: 4, nombre: "media", precio: 250 },
// ];

// for(const producto of productos){
//   console.log(producto.nombre);
//   console.log(producto.precio);
// }

// let nombre = prompt("Ingrese el nombre del producto");

// for(const producto of productos){
//   if(producto.nombre.includes(nombre)){
//     let mensaje = `
//       Id: ${producto.id}
//       Nombre: ${producto.nombre}
//       $${producto.precio}
//     `;

//     alert(mensaje);
//   }
// }

const productos = [
  { id: 1, nombre: "zapato mujer", precio: 1000 },
  { id: 2, nombre: "camisa", precio: 1350 },
  { id: 3, nombre: "gorra", precio: 750 },
  { id: 4, nombre: "media", precio: 250 },
];

let nombre = prompt("Ingrese el nombre del producto");
let precio = prompt("Ingrese el precio del producto");

let producto = {
  id: productos.length + 1,
  nombre,
  precio,
};

productos.push(producto);
console.log(productos);