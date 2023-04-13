/* 
estructura del for

for(desde; hasta; actualizacion){
  el codigo a repetir
}
*/
// i++      i = i + 1

// for(let i = 0; i < 100; i++){
//   console.log("hola");
// }

// let numero = parseInt(prompt("Ingrese el numero"));

// for(let i = 1; i <= 10; i++){
//   let resultado = numero * i;

//   alert(`${numero} * ${i} = ${resultado}`);
// }

// let saludo = "Hola";
// let nombre = "Juan";
// // let resultado = saludo + " " + nombre;
// let resultado = "${saludo} ${nombre} Bienvenido";

// console.log(resultado);

// for(let turno = 1; turno <= 7; turno = turno + 2){
//   let nombre = prompt("Ingrese su nombre");
//   alert(`Turno # ${turno} Nombre: ${nombre}`);
// }

// for(let i = 0; i < 10; i++){
//   if(i === 5){
//     break;
//   }

//   console.log(i);
// }

// console.log("final");

// for(let i = 0; i < 10; i++){
//   if(i === 5){
//     alsfhdjka
//     ;lkashjfd
//     lk;SharedArrayBufferlk;jdasf
//     continue;
//   }

//   console.log(i);
// }

// console.log("final");

/* 
estructura del while

while(condicion){
  codigo a repetir mientras la condicion es verdadera
}
*/

// let repetir = true;

// while(repetir){
//   console.log("Hola");
// }

// let usuario = prompt("Ingrese el usuario");

// while(usuario != "camila"){
//   alert("Usuario incorrecto");
//   usuario = prompt("Ingrese el usuario");
// }

// alert("Bienvenida");

let valor = false;

// while(valor){
//   console.log("entramos");
// }

// do {
//   console.log("entramos");
// } while (valor);

/* 
estructura del switch

switch(valor){
  case valor1:
    codigo a ejecutar en caso de que valor sea igual a valor1
    break;

  case valor2:
    codigo a ejecutar en caso de que valor sea igual a valor2
    break;
  .
  .
  .
  case valorn:
    codigo a ejecutar en caso de que valor sea igual a valorn
    break;

  default:
    codigo a ejecutar en caso de que ningun valor coincida con valor
    break;
}
*/

// let moneda = "usd";

// switch(moneda){
//   case "ars":
//     console.log("la moneda de argentina");
//     break;
  
//   case "cop":
//     console.log("la moneda de colombia");
//     break;
  
//   case "clp":
//     console.log("moneda de chile");
//     break;

//   default:
//     console.log("moneda desconocida");
//     break;
// }

let nombre = prompt("Ingrese un nombre");

while(nombre != "ESC"){
  switch(nombre){
    case "ANA":
      alert("Hola ANA");
      break;

    case "JUAN":
      alert("Hola JUAN");
      break;
    
    default:
      alert(`Quién eres? ${nombre}`);
      break;
  }

  nombre = prompt("Ingrese un nombre");
}