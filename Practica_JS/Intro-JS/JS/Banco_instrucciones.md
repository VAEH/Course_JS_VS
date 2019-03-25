En una Busqueda, el ">-1", Siginifica que no se ha encontrado.
push: Con el elemento (.push) cojo el elemento y lo meto al array.
//https://www.aprenderaprogramar.com/index.php?option=com_content&view=article&id=834:funciones-arrays-javascript-push-sort-ordenar-numeros-concat-join-pop-shift-slice-splice-etc-cu01153e&catid=78:tutorial-basico-programador-web-javascript-desde-&Itemid=206
pop(): Elimina el último elemento del array y lo devuelve. 
        Ejemplo:  var ultimoElemento = A1.pop();
                  //Ahora A1 tiene 1 elemento menos

shift(): Elimina el primer elemento de un Array y lo devuelve.
        Ejemplo:   var primerElemento = A1.shift();
                    //Ahora A1 tiene 1 elemento menos.

indexOf(x) : Busca x dentro del array y devuelve la posicion de la primera ocurrencia.
        Ejemplo:   var result = A1.indexOf(14);  

splice (ind, 0, it1, it2, … , itN): Modifica el array añadiendo los elementos it1, it2, …, itN, 
                                    que son insertados en la posición ind (desplazando a los existentes).        
        Ejemplo:   A1.splice(3, 0, 'xxx', 'yyy'); //26-arrays-multi.js
                   //Inserta xxx en posición 3, yyy en posición 4 y desplaza a los elementos existentes antes.

join :  Para convertir un array a texto. Une los elementos de un array en una cadena de texto 
        donde cada elemento está separado por ‘separador’.
        Ejemplo:    var frase = ['quiero', 'aprender'].join(' ');
                    //frase es tipo String y contiene ‘quiero aprender’

.split(", ") : Convierte una cadena de texto, separada por algo en un array.
        Ejemplo: //26-arrays_multi.js

sort() : Si no recibe parámetros, ordena los elementos del array por orden alfabético 
         (que no coincide con el numérico), quedando el array modificado. Comentaremos 
         esta función con más detenimiento.
         Ejemplo:  var result = [2, 11, 111, 7].sort();
                   //result vale [11, 111, 2, 7] porque el orden es alfabético, no numérico.

for in : Explicación Pendiente

find() : devuelve el valor del primer elemento del array que cumple la función de prueba 
         proporcionada. En cualquier otro caso devuelve 'undefined'.

findIndex() : Devuelve el indice del elemento encontrado en el array en lugar de su valor.
              Si necesitas encontrar la posición de un elemento o determinar si un elemento
              existe en un array, utiliza Array.prototype.indexOf() o Array.prototype.includes().
some() : Comprueba si al menos un elemento del array cumple con la condicion
         implementada por la funcion proporcionada. Este método devuelve false para cualquier
         condicion puesta en un array vacío.
