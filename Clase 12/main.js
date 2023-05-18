// let numero = 2;

// numero = numero + 1;
// numero += 1;
// numero++;

//operador ternario
/* 
estructura del operador ternario

condicion ? codigo cuando la condicion es verdadera : codigo cuando la condicion no es verdadera
*/

// let edad = 14;

// if(edad >= 18){
//   console.log("Eres mayor de edad");
// }else{
//   console.log("no eres mayor de edad");
// }

// edad >= 18 ? console.log("Eres mayor de edad") : console.log("No eres mayor de edad");

// const usuario = {
//   nombre: "Juan",
//   edad: 12,
// };
// let permiso;

// if (usuario.edad >= 18) {
//   permiso = true;
// } else {
//   permiso = false;
// }

// if (permiso) {
//   console.log("Puede entrar a la fiesta");
// } else {
//   console.log("No puede entrar a la fiesta");
// }

// const usuario = {
//   nombre: "Juan",
//   edad: 12,
// };

// const permiso = usuario.edad >= 18 ? true : false;
// permiso
//   ? console.log("Puede entrar a la fiesta")
//   : console.log("No puede entrar a la fiesta");

//condicion ? (condicion1 ? true : false) : false

// &&   ||
/* 
operador1 && operador2 retorna operador2 si operador1 representa algo verdadero de lo contrario retorna operador1

operador1 || operador2 retorna operador1 si este representa algo verdadero de lo contrario retorna operador2
*/

// const usuario = {
//   nombre: "pepito",
//   edad: 18,
// };

// const registro = usuario.edad >= 18 && new Date();
// registro ? console.log("entra") : console.log("no entra");

// const carrito = [];

// if (carrito.length === 0) {
//   console.log("El carrito está vacio");
// }

// carrito.length === 0 && console.log("el carrito esta vacio");

// console.log(0 || "Falsy"); // Falsy
// console.log(40 || "Falsy"); //40
// console.log(null || "Falsy");//falsy
// console.log(undefined || "Falsy");//falsy
// console.log("Hola Mundo" || "Falsy");//hola mundo
// console.log("" || "Falsy");//falsy
// console.log(NaN || "Falsy");//falsy
// console.log(true || "Falsy");//true
// console.log(false || "Falsy");//falsy

// const usuario1 = {
//   nombre: "pepito",
//   edad: 18,
// };

// const usuario2 = null;

// console.log(usuario1 || "El usuario no existe");
// console.log(usuario2 || "El usuario no existe");

// let carrito;
// let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

// if (carritoStorage) {
//   carrito = carritoStorage;
// } else {
//   carrito = [];
// }

// const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// const usuario = null;
// const usuario = {
//   nombre: "andres",
//   edad: 34,
// };
// // console.log(usuario.nombre || "El usuario no existe");
// console.log(usuario?.nombre || "El usuario no existe");

// const usuario = {
//   nombre: "juan",
//   edad: 22,
//   cursos: {
//     javascript: "aprobado",
//   },
// };

// console.log(usuario?.cursos?.javascript || "La propiedad no existe");

// let nombre1 = "andres";
// let nombre2 = nombre1;

// nombre2 = "juan";
// console.log(nombre1);

// let persona1 = { nombre: "camila", edad: 18 };
// let persona2 = {...persona1};

// persona2.nombre = "andres";
// console.log(persona1);

// const usuario = {
//   nombre: "juan",
//   edad: 23,
// };

// let nombre = usuario.nombre;
// let edad = usuario.edad;

// const { nombre, edad } = usuario;

// console.log(nombre, edad);
// const usuario = {
//   nombre: "John Doe",
//   edad: 32,
//   telefono: {
//     cel: 113334444,
//     casa: null,
//     trabajo: 113325555,
//   },
// };

// const {
//   nombre,
//   telefono: { casa, trabajo },
// } = usuario;

// console.log(nombre, casa, trabajo);

// const item = {
//   item_id: 432,
//   product_name: "Some product",
//   price_per_unit: 5600,
// };

// const {item_id: id} = item;
// console.log(id);

// const desestructurar = ({ edad, nombre }) => {
//   console.log(nombre, edad);
// };

// let usuario = {
//   nombre: "juan",
//   edad: 34,
// };

// desestructurar(usuario);

// const nombres = ["andres", "mariana", "camila", "pepito"];

// const [a, , b] = nombres;

// console.log(a, b);