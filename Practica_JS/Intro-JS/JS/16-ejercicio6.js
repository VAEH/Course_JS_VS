'use strict'

/*Que nos diga si un número es par o impar
1. Ventana prompt
2. Sí no es valido, vuelve a pedir el número
3. Mostrar Resultado */

var numeroUsr=parseInt(prompt("Inserte número a consultar",0));

while(isNaN(numeroUsr) ){
    var numeroUsr=parseInt(prompt("Inserte número a consultar",0));
}
        if(numeroUsr%2==0){
            alert( "Es Par");
        }else {
            alert(" Es Impar");
        }
    
