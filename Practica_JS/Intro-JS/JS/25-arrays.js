'use strict'

//Arreglos, Arrays, Matrices
//Colección de tipos de datos que puede contener una variable
//Una Variable, puede tener gran cántidad de valores. por ejemplo un array dentro de un array etc

var nombre = "Víctor Robles";
var nombres = ["Víctor", "Echavarría", "Hernández"];

var lenguajes = new Array("PHP", "JS", "GO", "Java");

console.log(nombres);
console.log(lenguajes);
/****************************************************************************** */
/*
//Selecciona desde un cajón de texto un elemnto del arrays
var elemento =parseInt(prompt("Que elemento del array Quieres?",0));
//Control de error para seleccionar cantidad existente en array
if(elemento>=nombres.length){
    alert("Intrdouce número correcto, menor que: "+nombres.length);
}else{
    alert("El usuario seleccionado es: "+(nombres[elemento]));
}*/
/******************************************************************************* */
//La propiedad .length muestra la cántidad que hay en el array
//Forma Clasica de hacer recorrido por un Array

document.write("<h1>Lenguajes de Programación 2018</h1>");
document.write("<ul>");
/*
//Utilizamos un Bucle para recorrer todo el array
for(var i=0; i<lenguajes.length;i++){
    document.write("<li>"+lenguajes[i]+"</li>");
    }
    */
/*
//Recorre un arrays utilizando JS con Foreach, for
//El For Each nos itera todo el array, nos lo recorre y no los muestra. Es una opción más limpia que el anterior
lenguajes.forEach((elemento, indice, data) => {
    document.write("<li>" + indice + " - " + elemento + "</li>");
});
*/
//Otra forma para hacer iteracciones y recorrer un Arrray
for (let lenguaje in lenguajes){
    document.write("<li>" +lenguajes [lenguaje] + "</li>");
}
document.write("</ul>");


//Busquedas dentro de un Array
var precios = [10, 20, 30];
/*
var busqueda =lenguajes.find(function(lenguaje){
    return lenguaje == "PHP";
    });
*/
    //Abreviacion de lo anterior utilizando la funcion flecha =>
    //var busqueda =lenguajes.find (lenguaje => lenguaje == "PHP");
   
    //Some sirve para que cumplan una funcion concreta 
    var busqueda =precios.some (precio => precio >=20);
        

    console.log(busqueda);