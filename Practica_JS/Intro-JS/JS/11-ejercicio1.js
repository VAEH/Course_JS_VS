'use strict'

var numero1 = prompt("Hola, Digite el primer Número");
var numero2= prompt("Digita el segundo número por favor");
//var imprime ="";
/*
switch(numero1, numero2){
    case numero1<numero2:
    imprime="Valor " +numero1+ " Es menor";
    break;

    case numero1>numero2:
    imprime="Valor "+numero1+" Es Mayor";
    break;
    case numero1==numero2:
    imprime="Son iguales!"
    break;

    default:
    imprime="Error de calculo";
    break;
}*/
while(numero1<=0 || numero2<=0 || isNaN(numero1, numero2) ){
    var numero1 = prompt("Hola, Digite el primer Número");
var numero2= prompt("Digita el segundo número por favor");
}

if (numero1==numero2){
    
    console.log("Ambos Números son Iguales");
 
}else if(numero2<numero1){
    console.log("Numero "+numero1+" Es Mayor y el Número: "+numero2+"Es menor");
    
}else{
    console.log("Numero "+numero1+" Es Menor y el Número: "+numero2+"Es Mayor");
    
}
//console.log(imprime);*/

