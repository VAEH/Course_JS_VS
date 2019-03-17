'use strict'
/*
Utilizando un Bucle, mostrar la suma y la media de los números introducidos
hasta introducir un numero negativo y ahí mostrar el resultado
*/

var suma=0;
var cont=0;
var media=0;

do{
var valorUsr =parseInt(prompt("Digite número y termine con -1",0));

if(isNaN(valorUsr)){
    valorUsr=0;
}else if(valorUsr>=0){
    suma= suma+valorUsr;
    cont++;
}

//console.log(suma, cont);
//debugger;
}while(valorUsr>=0);
media=suma/cont;
alert("Valor Suma : " +suma+"\nValor de la Media: "+media);