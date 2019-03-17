'use strict'

//Parametros REST y SPREAD
// ...resto_de_frutas Guarda lo que aún sigue faltando; guardandolos en un array Parametro"Rest"
//Parametros Tipo SPREAD => 
function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
    console.log("Fruta 1: "+fruta1);
    console.log("Fruta 2: "+fruta2);
    console.log(resto_de_frutas);
}

listadoFrutas("Naranja", "Manzana", "Sandia","Pera","Mandarina");

//Esto, es lo mismo que lo anterior solo que entrega el parametro
//Como un tipo de SPREAD, haciendo uso de un arrays.
var frutas =["Naranja", "Manzana"];
listadoFrutas(...frutas,"Sandia","Pera","Mandarina");
