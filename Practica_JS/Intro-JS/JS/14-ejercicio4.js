'use strict'

/* Mostrar todos los números impares introducidos por el Usuario.

*/
var numero1= parseInt(prompt("Introduzca Número 1"));
var numero2=parseInt(prompt("Introduza Número 2"));

for(var i=numero1; i<=numero2; i++){
    if(i%2 !=0){
        console.log("El "+i+" Es impar");
    }
}
