'use strict'

//Pruebas con let y var

//Prueba con var
var numero =40;
console.log(numero);

if(true){
    var numero =50;
    console.log(numero);
}
console.log(numero);
//Prueba con Let

var texto="Curso de Victor";
console.log(texto); //valor ""

if (true){
    let texto="Curso laravel 5";
    console.log(texto);
}
console.log(texto);