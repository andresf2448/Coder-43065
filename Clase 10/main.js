// let boton = document.getElementById("boton");

// addEventListener
// const respuesta = () => {
//   console.log("Hola Click");
// };

//Primera forma
// boton.addEventListener("click", respuesta);

//Segunda forma
// boton.onclick = respuesta;

// const respuesta = (nombre) => {
//   alert(`Hola ${nombre}`);
// };

// let nombre = prompt("Ingrese su nombre");
// boton.addEventListener("click", () => respuesta(nombre));

// let boton = document.getElementById("boton");

//EVENTOS DEL MOUSE

// boton.addEventListener("mousedown", () => console.log("mousedown"));
// boton.addEventListener("mouseup", () => console.log("mouseup"));
// boton.addEventListener("mouseover", () => console.log("mouseover"));
// boton.addEventListener("mouseout", () => console.log("mouseout"));
// boton.addEventListener("mousemove", () => console.log("mousemove"));
// boton.addEventListener("click", () => console.log("click"));
// boton.addEventListener("dblclick", () => console.log("dblclick"));

// boton.addEventListener("click", () => console.log("click"));

// let saludo = document.getElementById("saludo");

// boton.addEventListener("mousedown", () => {
//   saludo.className = "verde";
// });

// boton.addEventListener("mouseup", () => {
//   saludo.className = "azul";
// });

// boton.addEventListener("mouseover", () => {
//   saludo.className = "rojo";
// });

// boton.addEventListener("mouseout", () => {
//   saludo.className = "amarillo";
// });

// document.body.className = "rojo";

// let boton1 = document.getElementById("boton1");
// let boton2 = document.getElementById("boton2");

// boton1.addEventListener("click", () => {
//   document.body.className = "rojo";
// })
// boton2.addEventListener("click", () => {
//   document.body.className = "verde";
// })

//EVENTOS DEL TECLADO
// let nombre = document.getElementById("nombre");
// let saludo = document.getElementById("saludo");

// // nombre.addEventListener("keydown", () => console.log("keydown"));
// // nombre.addEventListener("keyup", () => console.log("keyup"));

// nombre.addEventListener("keyup", (e) => {
//   if (e.key === "a") {
//     saludo.className = "rojo";
//   } else if (e.key === "s") {
//     saludo.className = "verde";
//   } else if (e.key === "d") {
//     saludo.className = "azul";
//   } else {
//     saludo.className = "amarillo";
//   }
// });
// document.body.className = "rojo";

let nombre = document.getElementById("nombre");
let saludo = document.getElementById("saludo");

nombre.addEventListener("change", () => console.log("desenfoque"));
nombre.addEventListener("input", () => {
  console.log(nombre.value);
  // if(!nombre.value.includes("@")){
  //   saludo.className = "rojo";
  // }else{
  //   saludo.className = "blanco";
  // }
});

// let formulario = document.getElementById("formulario");
// formulario.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let inputs = e.target.children;

//   if (!inputs[0].value.includes("@")) {
//     inputs[0].value = "";
//     let div = document.createElement("div");
//     div.innerHTML = "No contiene el @";
//     document.body.append(div);
//   }
// });
