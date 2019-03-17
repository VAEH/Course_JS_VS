'use strict'
//Funciones
// Una Función, es una agrupación reutilizable de un conjunto de intrucciones

function porConsola(numero1, numero2){
    console.log("Suma: "+(numero1+numero2));
    //console.log(mostrar);
}

function porPantalla(numero1, numero2){
    document.write("Suma: "+(numero1+numero2));
    //document.write(mostrar);
}
//Defino la Función
function calculadora(numero1, numero2, mostrar=false){
    if(mostrar==false){
        porConsola(numero1, numero2);
    }else{
        porPantalla(numero1, numero2);
    }
    return true;
    //Conjunto de intrucciones a ejecutar
    //return "Hola, Soy La Calculadora";
}

//Invocar o llamar la funcion
calculadora(2,1);
calculadora(2,5,true);
//Esto se puede agregar a bucle para que ejecuta
//Un número de veces, dependiendo de lo que se quiera realizar