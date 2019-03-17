'use strict'

//Arreglos, Arrays, Matrices
//Colección de tipos de datos que puede contener una variable
//Prueba

var nombre ="Víctor Robles";
var nombres =["Víctor", "Echavarría", "Hernández"];

var lenguajes = new Array("PHP", "JS", "GO", "Java");

console.log (nombres);
console.log(lenguajes);
/*
var elemento =parseInt(prompt("Que elemento del array Quieres?",0));
if(elemento>=nombres.length){
    alert("Intrdouce número correcto, menor que: "+nombres.length);
}else{
    alert("El usuario seleccionado es: "+(nombres[elemento]));
}*/

document.write("<h1>Lenguajes de Programación 2018</h1>");
document.write("<ul>");
for(var i=0; i<lenguajes.length;i++){
    document.write("<li>"+lenguajes[i]+"</li>");
    }
    document.write("</ul>");