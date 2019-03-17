'use strict'
var numero=12;
var texto ="Hola Mundo, soy una variable Global";
function holamUndo(texto){
    //Variables dentro de la funcion son locales, y se puede recibir variables de parte externa
    //Pero la parte externa, no puede recibir variables locales dentro de la función.
    console.log(texto);
    console.log(numero.toString()); //Forma de convertir un dato  aun String
}
holamUndo(texto);