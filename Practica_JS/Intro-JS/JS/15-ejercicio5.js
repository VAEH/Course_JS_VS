'use strict'

/*Muestre todos los numeros divisores de un numero introduce en promt*/

var numero = parseInt(prompt("Ingrese número",1));

for (var i=1; i<=numero; i++){
    if(numero%i==0){
        console.log("Divisor: "+ i);
    }
}