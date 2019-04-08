'use strict'

/* 
1. Pida 6 números por pantalla y los meta en un array
2. Mostrar el Array entero (Todos sus elementos ) en el cuerpo de la pagina y la consola 
3. Ordenarlo y mostrarlo 
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array 
6. Busqueda  de un valor introducido  por el usuario, que nos diga si lo encuentra  y su indice 
   (Se valorara el uso de funciones)
*/
function mostrarArray(elementos, textoCustom = "") {
    document.write("<h1>Contenido del array " + textoCustom + "</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
        document.write("<li>" + elemento + "</li>");
    });
    document.write("<ul>");
}
//Pedir 6 números
//var numero = new Array(6); // o también
var numeros = [];
for (var i = 0; i <= 5; i++) {
    //numero[i]= parseInt(prompt("Introduce 6 número por favor ",0)); //O también
    numeros.push(parseInt(prompt("Introduce 6 número por favor ", 0)));
}
//Mostrar en el cuerpo de la pagina
mostrarArray(numeros);

//Mostrar array en la consola 
console.log(numeros);

//Ordenar y mostrar 
numeros.sort();
mostrarArray(numeros, 'ordenado');

//Invertir y mostrar
numeros.reverse();
mostrarArray(numeros, ' Invertido');

//Contar elementos de un array 
document.write("<h1> El Array tiene: " + numeros.length + " elementos");

//Busqueda 

var busqueda = parseInt(prompt("Busca un numero ", 0));

var posicion = numeros.findIndex(numero=> numero == busqueda);
if (posicion && posicion != -1) {
    document.write("<hr/><h1>ENCONTRADO</h1>");
    document.write("<h1>Posicion de la busqueda " + posicion + "</h1><hr/>");
}else {
    document.write("<hr/><h1>NO ENCONTRADO!!</h1><hr/>");
}
