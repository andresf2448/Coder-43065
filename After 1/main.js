let numero = parseInt(prompt("Ingrese un número"));
let operacion = prompt("Ingrese 1 (par o impar) o 2 (primo) o 0 (para salir)");

while(operacion != "0"){
  if(operacion === "1"){
    if(numero % 2 === 0){
      alert("El número es par");
    }else{
      alert("El número es impar");
    }
  }

  if(operacion === "2"){
    let esPrimo = true;

    for(let i = 2; i < numero; i++){
      if(numero % i === 0){
        esPrimo = false;
      }
    }

    if(esPrimo){
      alert("es primo");
    }else{
      alert("no es primo");
    }
  }

  numero = parseInt(prompt("Ingrese un número"));
  operacion = prompt("Ingrese 1 (par o impar) o 2 (primo) o 0 (para salir)");
}