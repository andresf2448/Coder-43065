// console.log(document.body);
// getElementById trae por id

// let div = document.getElementById("aplicacion");
// console.log(div.innerHTML);
// console.log(div.innerText);

// let parrafo = document.getElementById("parrafo");
// console.log(parrafo.innerHTML);
// console.log(parrafo.innerText);

// getElementsByClassName trae por clase
// let perritos = document.getElementsByClassName("perritos");
// console.log(perritos[0].innerHTML);
// console.log(perritos[1].innerHTML);
// console.log(perritos[2].innerHTML);

// getElementsByTagName
// let contenedores = document.getElementsByTagName("div");
// console.log(contenedores[0].innerHTML);
// console.log(contenedores[1].innerHTML);
// console.log(contenedores[2].innerHTML);

// let perritos = document.getElementsByClassName("perritos");

// for(const perrito of perritos){
//   console.log(perrito.innerHTML);
// }

// let saludo = document.getElementById("saludo");
// saludo.innerHTML = "<h1>Hola mundo</h1>";
// saludo.className = "color";

// let saludo = document.getElementById("saludo");
// let seccion = prompt("Ingrese la seccion a la que quiere ingresar");

// if (seccion === "carrito") {
//   saludo.innerHTML = "<h1>Bienvenido al carrito</h1>";
//   saludo.className = "rojo";
// } else if (seccion === "favoritos") {
//   saludo.innerHTML = "<h1>Bienvenido a los favoritos</h1>";
//   saludo.className = "azul";
// } else {
//   saludo.innerHTML = "<h1>Bienvenidos a nuestra super página</h1>";
//   saludo.className = "verde";
// }

//CREACION DE NODOS
// let contenedor = document.getElementById("contenedor");
// let parrafo = document.createElement("p"); //creación de la etiqueta
// parrafo.innerHTML = "<h1>Hola</h1>"; //asignación de contenido
// document.body.append(parrafo); //asignación del padre
// contenedor.append(parrafo);

// let contenedor = document.getElementById("contenedor");
// contenedor.remove();

// let div = document.createElement("div");

// let contenedor = document.getElementById("contenedor");

// let personas = ["juan", "mario", "andres", "camila"];

// personas.forEach((item) => {
//   let div = document.createElement("div");
//   div.innerHTML = item;
//   contenedor.append(div);
// });

let contenedor = document.getElementById("contenedor");
let productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "zapato", precio: 1100 },
  { id: 3, nombre: "gorra", precio: 1350 },
  { id: 4, nombre: "media", precio: 1750 },
  { id: 5, nombre: "short", precio: 1751 },
];

productos.forEach((item) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2 class="elemento${item.id}">ID: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <b>Precio: $${item.precio}</b>
  `;

  contenedor.append(div);
});
