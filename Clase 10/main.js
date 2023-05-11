let boton = document.getElementById("boton");

// addEventListener
// const respuesta = () => {
//   console.log("Hola Click");
// };

//Primera forma
// boton.addEventListener("click", respuesta);

//Segunda forma
// boton.onclick = respuesta;

const respuesta = (nombre) => {
  alert(`Hola ${nombre}`);
};

let nombre = prompt("Ingrese su nombre");
boton.addEventListener("click", () => respuesta(nombre));
