// function mayorQue(n){
//   return m => m > n;
// }

// let mayorQueCinco = mayorQue(5); // m => m > 5;
// let mayorQueSiete = mayorQue(7); // m => m > 7;
// console.log(mayorQueCinco(6));
// console.log(mayorQueCinco(3));
// console.log(mayorQueSiete(10));
// console.log(mayorQueSiete(4));

// function operaciones(operacion) {
//   if (operacion === "suma") {
//     return (x, y, z) => x + y + z;
//   }

//   if (operacion === "resta") {
//     return (x, y) => x - y;
//   }

//   if (operacion === "multiplicacion") {
//     return (x, y) => x * y;
//   }

//   if (operacion === "division") {
//     return (x, y) => x / y;
//   }
// }

// let suma = operaciones("suma"); // (x, y) => x + y;
// console.log(suma(9, 1, 4));

// let resta = operaciones("resta"); // (x, y) => x - y;
// console.log(resta(10, 4));

// let operacion = prompt("Ingrese una operacion");
// let numero1 = parseInt(prompt("Ingrese el numero"));
// let numero2 = parseInt(prompt("Ingrese el numero"));
// let numero3 = parseInt(prompt("Ingrese el numero"));

// let operador = operaciones(operacion);
// alert(operador(numero1, numero2, numero3));

// function iterador(arreglo, funcion) {
//   for (const numero of arreglo) {
//     funcion(numero);
//   }
// }

// iterador([2, 5, 6, 4, 7], console.log);

// let arreglo = ["maria", "andres", "pepito"];

// for(const nombre of arreglo){
//   console.log(nombre);
// }

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 750 },
//   { id: 3, nombre: "media", precio: 290 },
//   { id: 4, nombre: "gorra", precio: 1350 },
// ];

//forEach recorrer el arreglo

// productos.forEach(item => {
//   console.log(item.nombre);
//   console.log(item.precio);
// });

//find encuentra el primer elemento del objeto que cumpla una condicion dada
// let producto = productos.find(item => item.nombre === "gorra");
// console.log(producto);

// let nombre = prompt("Ingrese el nombre del producto a buscar");
// let productoEncontrado = productos.find((item) => item.nombre === nombre);

// if (productoEncontrado) {
//   let mensaje = `
//     Id: ${productoEncontrado.id}
//     Nombre: ${productoEncontrado.nombre}
//     Precio: $${productoEncontrado.precio}
//   `;
//   alert(mensaje);
// }else{
//   alert("Producto no encontrado");
// }

//filter filtra los elementos que cumplan una condicion
// let productosEncontrados = productos.filter(item => item.precio > 500);
// console.log(productosEncontrados);

// const productos = [
//   { id: 1, nombre: "camisa hombre", precio: 1000 },
//   { id: 2, nombre: "camisa mujer", precio: 500 },
//   { id: 3, nombre: "zapato hombre", precio: 750 },
//   { id: 3, nombre: "zapato mujer", precio: 300 },
//   { id: 4, nombre: "media", precio: 290 },
//   { id: 5, nombre: "gorra", precio: 1350 },
// ];

// let precio = parseInt(prompt("Ingrese el valor minimo del producto"));
// let nombre = prompt("Ingrese el nombre");

// let productoEncontrados = productos.filter(
//   (item) => item.nombre.includes(nombre) && item.precio > precio
// );

// productoEncontrados.forEach((item) => {
//   let mensaje = `
//     Id: ${item.id}
//     Nombre: ${item.nombre}
//     Precio: $${item.precio}
//   `;
//   alert(mensaje);
// });

// const productos = [
//   { id: 1, nombre: "camisa hombre", precio: 1000 },
//   { id: 2, nombre: "camisa mujer", precio: 500 },
//   { id: 3, nombre: "zapato hombre", precio: 750 },
//   { id: 4, nombre: "zapato mujer", precio: 300 },
//   { id: 5, nombre: "media", precio: 290 },
//   { id: 6, nombre: "gorra", precio: 1350 },
// ];

//some valida si al menos un elemento cumple la condicion dada
// let validacion = productos.some(item => item.precio === 6845241);
// console.log(validacion);
// let nombre = prompt("Ingrese el nombre del producto para saber si esta disponible");
// let validacion = productos.some(item => item.nombre === nombre);

// if(validacion){
//   alert(`El producto ${nombre} esta disponible`);
// }else{
//   alert(`El producto ${nombre} no esta disponible`);
// }

// const productos = [
//   { id: 1, nombre: "camisa hombre", precio: 1000 },
//   { id: 2, nombre: "camisa mujer", precio: 500 },
//   { id: 3, nombre: "zapato hombre", precio: 750 },
//   { id: 4, nombre: "zapato mujer", precio: 300 },
//   { id: 5, nombre: "media", precio: 290 },
//   { id: 6, nombre: "gorra", precio: 1350 },
// ];

//map transforma el arreglo
// let precios = productos.map(item => item.precio);
// console.log(precios);

// let nombres = productos.map(item => item.nombre);
// console.log(nombres);

// let preciosEspeciales = productos.map(item => {
//   return {
//     id: item.id,
//     nombre: item.nombre,
//     precio: item.precio - item.precio * 0.21
//   }
// });

// console.log(preciosEspeciales);

// const productos = [
//   { id: 1, nombre: "camisa hombre", precio: 1000 },
//   { id: 2, nombre: "camisa mujer", precio: 500 },
//   { id: 3, nombre: "zapato hombre", precio: 750 },
//   { id: 4, nombre: "zapato mujer", precio: 300 },
//   { id: 5, nombre: "media", precio: 290 },
//   { id: 6, nombre: "gorra", precio: 1350 },
// ];

//reduce reduce el arreglo a un único valor
// let numeros = [4, 6, 55, 8, 7, 9];

// let total = numeros.reduce((acum, item) => acum + item, 7);
// console.log(total);

// let total = productos.reduce((acum, item) => acum + item.precio, 0);
// console.log(total);

// const numeros = [ 40, 1, 5, 200 ];
// numeros.sort((a, b) => a - b);  // [ 1, 5, 40, 200 ]
// numeros.sort((a, b) => b - a);  // [ 200, 40, 5, 1 ]

const items = [
  { name: "Pikachu", price: 21 },
  { name: "Charmander", price: 37 },
  { name: "Pidgey", price: 45 },
  { name: "Squirtle", price: 60 },
];
console.log(
  items.sort((a, b) => {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }

    return 0;
  })
);
