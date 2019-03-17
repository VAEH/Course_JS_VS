'use strict'
/*Tabla de multiplicar de un numero introducido por pantalla */

var  numero =parseInt(prompt("Introduzca Numero",0));
var cont =0;

while(isNaN(numero) ){
    var  numero =parseInt(prompt("Introduzca Numero",0));
}
for (var i=0; i<=10;i++){
    
    cont=numero*i;
    console.log(numero+" X "+i+ " = "+cont);

}

//Todas las Tablas de multiplicar

for(var c=1; c<=10;c++){
    document.write("<h1>Tabla del " +c+"</h1>")
    for(var t=1; t<=10;t++){
        document.write(c+" X "+t+" = "+(t*c)+"<br/>");
    }
}