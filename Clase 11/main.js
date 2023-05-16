// console.log(localStorage);

// localStorage.setItem("nombre", "pepito");
// localStorage.setItem("numero", "5");
// localStorage.setItem("valor", "true");

// let nombre = localStorage.getItem("nombre");
// console.log(nombre);

// let numero = localStorage.getItem("numero");
// console.log(numero);

// let valor = localStorage.getItem("valor");
// console.log(valor);

// sessionStorage.setItem("nombre", "pepito");
// sessionStorage.setItem("numero", "5");
// sessionStorage.setItem("valor", "true");

// let nombre = sessionStorage.getItem("nombre");
// console.log(nombre);

// let numero = sessionStorage.getItem("numero");
// console.log(numero);

// let valor = sessionStorage.getItem("valor");
// console.log(valor);

// for (let i = 0; i < localStorage.length; i++) {
//   let clave = localStorage.key(i);

//   console.log("clave", clave);
//   console.log("valor", localStorage.getItem(clave));
// }

// let arreglo = [1, 32, 5, 57];
// localStorage.setItem("arreglo", arreglo);
// console.log(localStorage);

// let objeto = {
//   nombre: "andres",
//   edad: 34,
// };
// localStorage.setItem("objeto", objeto)
// console.log(localStorage);

// let arreglo = [1, 32, 5, 57];
// localStorage.setItem("arreglo", JSON.stringify(arreglo));
// console.log(localStorage);

// let objeto = {
//   nombre: "andres",
//   edad: 34,
// };
// localStorage.setItem("objeto", JSON.stringify(objeto))
// console.log(localStorage);

// let arreglo = localStorage.getItem("arreglo");
// console.log(JSON.parse(arreglo));

// let objeto = localStorage.getItem("objeto");
// console.log(JSON.parse(objeto));

// localStorage.clear();
// localStorage.removeItem("numero");

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 1000 },
//   { id: 3, nombre: "gorra", precio: 1000 },
//   { id: 4, nombre: "media", precio: 1000 },
// ];

// const guardar = (clave, valor) => {
//   localStorage.setItem(clave, valor);
// };

// productos.forEach(item => {
//   guardar(item.id, JSON.stringify(item))
// })

// localStorage.setItem("carrito", JSON.stringify(productos));

// let usuario;
// let usuarioStorage = sessionStorage.getItem("usuario");

// if(usuarioStorage){
//   usuario = usuarioStorage;
//   alert(`Bienvenido nuevamente ${usuario}`);
// }else{
//   let nombre = prompt("Ingrese su nombre");
//   sessionStorage.setItem("usuario", nombre);
//   alert(`Bienvenido por primera vez ${nombre}`);
// }

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 1000 },
//   { id: 3, nombre: "gorra", precio: 1000 },
//   { id: 4, nombre: "media", precio: 1000 },
// ];

// localStorage.setItem("carrito", JSON.stringify(productos));

// let eliminar = document.getElementById("eliminar");
// let carrito = [];
// let carritoStorage = localStorage.getItem("carrito");

// if (carritoStorage) {
//   carrito = JSON.parse(carritoStorage);
// }else{
//   let div = document.createElement("div");
//   div.innerHTML = "Carrito vacio";
//   document.body.append(div);
// }

// carrito.forEach(item => {
//   let div = document.createElement("div");
//   div.innerHTML = `
//     <h2>ID: ${item.id}</h2>
//     <p>Nombre: ${item.nombre}</p>
//     <b>$${item.precio}</b>
//     <button id="botton${item.id}">Eliminar</button>
//   `;

//   document.body.append(div);
// });

// eliminar.addEventListener("click", () => {
//   localStorage.clear();
//   location.reload();
//   alert("carrito eliminado");
// });