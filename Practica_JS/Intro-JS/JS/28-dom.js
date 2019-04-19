'use strict'

//Dom - Document object Model
//ES practicamente seleccionar cosas desde el HTML y manipular a nuestro antojo desde JS 

//Conseguir elementos con un iD concreto

//var caja =document.getElementById("micaja");  //Es una forma de utilizar
var caja = document.querySelector("#micaja"); // Es una forma más elegante
caja.innerHTML = "¡Text modificado desde Caja!"; //Texto modificado desde JS en HTML 
caja.style.background = "red";
//console.log(caja);

//También se puede hacer una funcion para cambiar el color desde consola, pero tengo pereza -_-


//Conseguir todos los elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');

//todosLosDivs.forEach((valor, indice) => {
var seccion = document.querySelector("#Miseccion");
var hr = document.createElement("hr");
var valor;
for (valor in todosLosDivs) {
    if (typeof todosLosDivs[valor].textContent == 'string') {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }

}

seccion.append(hr);
//});

//Conseguir todos los elementos por su clase css

var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
 divsAmarillos[0].style.background = "yellow";
for (var div in divsRojos) {
    if (divsRojos[div].className == "rojo") {
        divsRojos[div].style.background = "red";
    }
}

//console.log(divsRojos);

//Query Selector

 var id = document.querySelector("#Encabezado");
 console.log(id);

 var claseRojo = document.querySelectorAll("div.rojo");
 console.log(claseRojo);