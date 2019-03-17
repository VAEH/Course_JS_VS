'use strict'

/*Hacer Una calculadora
1. Pida 2 numeros por pantalla
2. Si metemos unos mal que nos lo vuelva a pedir
3.En el cuerpo de la pagina en una alerta
4.POr consola, Sumar, restar, Multiplicar y dividir esas 2 cifras */

var numero1=parseInt(prompt("Introduce un Número",0));
var numero2=parseInt(prompt("Introduce un Número",0));
while (isNaN(numero1, numero2) || numero1<0 || numero2<0){
    var numero1=parseInt(prompt("Introduce un Número",0));
    var numero2=parseInt(prompt("Introduce un Número",0));
}
document.write("<h1>Operación entre "+numero1+" y "+numero2+ " <h1>");
var resultado = "La suma es: "+(numero1+numero2)+"<br/>"+
                "La Resta es: "+(numero1-numero2)+"<br/>"+
                "La Multiplicación  es: "+(numero1*numero2)+"<br/>"+
                "La División es: "+(numero1/numero2)+"<br/>";

document.write(resultado);