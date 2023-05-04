//Objeto Math
// console.log(Math.E);
// console.log(Math.PI);

// console.log(Math.max(5, 4, 6, 7, 89, 9));
// console.log(Math.min(5, 4, 6, 7, 89, 9));
// console.log(Math.max(5, 4, Infinity, 7, 89, 9));
// console.log(Math.min(5, 4, -Infinity, 7, 89, 9));

// console.log(Math.floor(3.7));
// console.log(Math.ceil(3.1));
// console.log(Math.round(3.1));
// console.log(Math.round(3.6));
// console.log(Math.sqrt(9));
// console.log(Math.sqrt(-4));
// console.log(Math.floor(Math.random() * 10 + 20));
// console.log(Math.random());
// console.log(Math.random());

// const generadorAleatorio = (numero) => {
//   return Math.round(Math.random() * numero);
// };

// console.log(generadorAleatorio(100));
// console.log(generadorAleatorio(10));

//Clase Date
// console.log(Date());
// console.log(new Date(2023, 4, 3));

// const navidad = new Date(2023, 11, 25, 23, 59, 59);
// console.log(navidad);

const diciembre = new Date("December 25, 2023");
// console.log(diciembre);
// console.log(diciembre.toDateString());
// console.log(diciembre.toLocaleString());
// console.log(diciembre.toLocaleDateString());
// console.log(diciembre.toTimeString());
// console.log(diciembre.getFullYear());
// console.log(diciembre.getMonth());
// console.log(diciembre.getDay());

const hoy = new Date("May 3, 2023");
const navidad = new Date("December 24, 2023");

console.log(navidad - hoy);
const milisegundosPorDia = 86400000;
console.log((navidad - hoy) / milisegundosPorDia);