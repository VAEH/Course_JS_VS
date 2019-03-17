'use strict'

/* Usuario ingrese dos números dentro de los cuales se imprimira los que 
contengan estos 2. 
*/

var numero1 =parseInt(prompt("Ingrese Número 1"));
var numero2= parseInt(prompt("Ingrese Número 2"));
document.write("<h1>De"+numero1+" a "+numero2+ " Están estos números:<h1>")
for (var i =numero1; i<=numero2;i++){
    document.write(i+"<br/>");
}

