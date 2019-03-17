'use strict'

//Transformación de textos 
var numero= 444;
var  texto1 = "Bienvenidos al curso, curso !";
var texto2 ="Curso ACeptable";
/*
var dato=numero.toString();
    dato=texto1.toUpperCase();

console.log( dato);

//Calcular longitud
var nombre ="";

console.log(nombre.length);

//Concatenar - Unir textos

//var textoTotal = texto1+texto2;
var textoTotal =texto1.concat(" "+ texto2);
console.log(textoTotal); */

//Bueno, en fin... Hay muchos métodos de busqueda
var busqueda =texto1.includes("curso");
console.log(busqueda);

//Funciones de Reemplaxo
var busqueda1 =texto2.replace("Curso", "curso1");
console.log(busqueda1);
//split: Mete todo dentro de un array, útil para hacer buscadores
//trim: Quitar los espacios por delante y por detras. utilizable para correos etc.

/*Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	backspace
\f	form feed */