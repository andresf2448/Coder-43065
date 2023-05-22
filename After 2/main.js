// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 1000 },
//   { id: 3, nombre: "gorra", precio: 1000 },
//   { id: 4, nombre: "media", precio: 1000 },
// ];

// localStorage.setItem("carrito", JSON.stringify(productos));

// let carrito = JSON.parse(localStorage.getItem("carrito"));
// // let producto = carrito.find(item => item.nombre === "camisa");
// // console.log(producto);

// let filtrados = carrito.filter(item => item.id > 2);
// console.log(filtrados);

let numeros = [3, 5, 6, 7, 81, 2];
let ordenados = numeros.sort((a, b) => a - b);
console.log(ordenados[0]);
