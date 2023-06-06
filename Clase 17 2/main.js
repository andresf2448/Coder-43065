let usuarios = [
  { id: 1, nombre: "Braian", edad: 26 },
  { id: 2, nombre: "Angeles", edad: 26 },
  { id: 3, nombre: "Andrés", edad: 26 },
];

const agregar = (id) => {
  let usuario = usuarios.find((item) => item.id === id);
  console.log(usuario);
};

usuarios.forEach((usuario) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>Nombre: ${usuario.nombre}</h2>
    <h2>Edad: ${usuario.edad}</h2>
    <button id="boton${usuario.id}">Agregar a la lista</button>
  `;

  document.body.append(div);
  
  let boton = document.getElementById(`boton${usuario.id}`);
  boton.addEventListener("click", () => agregar(usuario.id));
});
