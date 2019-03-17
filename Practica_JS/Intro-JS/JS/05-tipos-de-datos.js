'user strict'
//Operadores
var numero =7;
var numero2=12;
var operacion = numero %numero2;

alert("El resultado de la operacion es: "+operacion);
//Tipos de datos
var numero_falso ="33"; // Esta dentro de comillas, lo cual sigifica que se interpreta como un String

//Number, String, parseDouble... sirven para la conversion a tipos de de datos en JS
console.log(Number( numero_falso) +2); // Con el valor Número, se interpreta o se convierte en número ignorando comillas
console.log(typeof numero_falso); //Typeof, muestra el tipo de dato que se contiene la variable

