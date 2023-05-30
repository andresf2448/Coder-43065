// setTimeout(funcion, time);

// setTimeout(() => {
//   console.log("Hola");
// }, 2000);

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 3000);

// console.log("final");

// const boton = document.getElementById("boton");
// const saludo = document.getElementById("saludo");

// boton.addEventListener("click", () => {
//   saludo.classList.add("color");

//   setTimeout(() => {
//     saludo.classList.remove("color");
//   }, 5000);
// });

// for (let letra of "hola") {
//   setTimeout(() => {
//     console.log(letra);
//   }, 1000);
// }

// for (let letra of "mundo") {
//   setTimeout(() => {
//     console.log(letra);
//   }, 3000);
// }

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 0);

// console.log("final");

// function multiply(x, y) {
//   return x * y;
// }

// function printSquare(x) {
//   let s = multiply(x, x);
//   console.log(s);
// }

// printSquare(5);

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 0);

// console.log("final");

// setInterval(() => {
//   console.log("Hola");
// }, 3000);

// let counter = 0;
// const interval = setInterval(() => {
//   counter++;
//   console.log("Counter: ", counter);

//   if (counter >= 5) {
//     clearInterval(interval);
//     console.log("Se removió el intervalo");
//   }
// }, 1000);

// new Promise((resolve, reject) => {
//   //cuerpo de la promesa
// });

// const futuro = (value) => {
//   return new Promise((resolve, reject) => {
//     if (value) {
//       resolve("Promesa resuelta");
//     } else {
//       reject("Promesa rechazada");
//     }
//   });
// };

// console.log(futuro(false));

// const futuro = (value) => {
//   return new Promise((resolve, reject) => {
//     value ? resolve("Promesa resuelta") : reject("Promesa rechazada");
//   });
// };

// console.log(futuro(false));

// const futuro = (value) => {
//   return new Promise((resolve, reject) => {
//     value
//       ? resolve(["andres", "Angeles", "Braian"])
//       : reject("Promesa rechazada");
//   });
// };

// futuro(true)
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("proceso terminado"));

////////////////////////////////////////////////////////////////////////// SERVIDOR
const BD = [
  { id: 1, nombre: "Producto 1", precio: 1500 },
  { id: 2, nombre: "Producto 2", precio: 2500 },
  { id: 3, nombre: "Producto 3", precio: 3500 },
  { id: 4, nombre: "Producto 4", precio: 3500 },
];

const traerProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(BD);
    }, 3000);
  });
};
///////////////////////////////////////////////////////////////////////////

traerProductos()
  .then((response) => {
    response.forEach((producto) => {
      let div = document.createElement("div");
      div.innerHTML = `
        <h2>Id: ${producto.id}</h2>
        <p>Nombre: ${producto.nombre}</p>
        <b>$${producto.precio}</b>
        <hr/>
      `;

      document.body.append(div);
    });
  })
  .catch((error) => console.log(error));
