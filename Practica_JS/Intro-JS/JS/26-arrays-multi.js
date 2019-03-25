'use strict'

//Los Arrays Multidimensionales, es un Array dentro de un Array

var categorias = ['Accion', 'Terror'];
var peliculas = ['La verdad duele', 'La vida es bella'];

var cine =[categorias, peliculas];
//Ejemplo de añadir y eliminar elemnto de un array.
/*
//Introduce Pelicula en un array y se termina cuando es diferente 
// De "ACABAR"
var elemento = "";
do{
    elemento=prompt("Introduce Tu Pelicula: ");
    peliculas.push(elemento);
}
while(elemento != "ACABAR");
peliculas.pop();
*/

//Ejemplo eliminar un elemento del Array

var indice = peliculas.indexOf('La verdad duele');

if(indice >-1){
    peliculas.splice(indice, 1);
}
//Convierte un Array a texto, el join se tiene que guardar en otra variable
var peliculas_string=peliculas.join();

var cadena = "texto1, texto2, texto3";
//En este convierte en caso contrario, una cadena de texto
//Separa por una ', ' en un array
var cadena_array= cadena.split(", ");
//Con el elemento (.push) cojo el elemento y lo meto al array
//peliculas.push("Batman");
console.log(peliculas_string);
console.log(cadena_array);
