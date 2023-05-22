// let nombre1 = "juan";
// let nombre2 = nombre1;

// nombre2 = "felipe";
// console.log(nombre1);

// let objeto1 = { nombre: "mariana", edad: 45 };
// let objeto2 = {...objeto1};

// objeto2.nombre = "camila";
// console.log(objeto1);

// const nombres = ["Braian", "Angeles", "Andrés"];

// console.log(...nombres);

// const numeros = [1, 4, 5, 8, 3, 2];

// console.log(Math.max(...numeros));
// console.log(Math.min(...numeros));

// const nombres1 = ["pepito", "pepita"];
// const nombres2 = ["Braian", "Angeles", "Andrés"];

// const nombres = [...nombres1, ...nombres2];

// console.log(nombres);

// const usuario1 = {
//   nombre: "juan",
//   edad: 34,
// };

// const usuario2 = {
//   ...usuario1,
//   nombre: "pepito",
//   curso: "javascript"
// }

// console.log(usuario2);

// function sumar(...numeros) {
//   console.log(numeros);
// }

// sumar(4, 3, 5, 7, 9, 4, 1);

function sumar(...numeros) {
  return numeros.reduce((acum, item) => acum + item, 0);
}

console.log(sumar(2, 5, 4, 6, 87, 9));
console.log(sumar(2, 5, 4, 6));
