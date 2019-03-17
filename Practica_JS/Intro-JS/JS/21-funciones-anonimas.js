'use strict'

//Funciones Anonimas
//Es una funcion que no tiene nombre
//Callback: Es una función que se ejecuta dentro de otra función.
/*var pelicula =function(nombre){
    return "La pelicula es:"+nombre;
}*/

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var suma =numero1+numero2;
    //Todas las funciones tienen que retornar algo -_-
    sumaYmuestra(suma);
    sumaPorDos(suma);
    return suma;
}
//Paso una función como parametro. La ejecución de una funcion anonima
//como parametro de otra
sumame(5,7, function(dato){
    console.log("La suma es: ", dato);
},
function(dato){
    console.log("La suma por dos es: ", (dato*2));
})

//ES los mismo que lo anterior, solo que usa el modelo de flecha, como una forma mas limpia y "Limpia"

sumame(5,7, dato =>{
    console.log("La suma es: ", dato);
},
dato =>{
    console.log("La suma por dos es: ", (dato*2));
})
