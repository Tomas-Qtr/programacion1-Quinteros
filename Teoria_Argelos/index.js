let marcas = ['ford', 'rebnault', 'volkswagen', 'seat', 'Peugeot', 'Chevrolet', 'Fiat', 'Toyota', 'Chery'];


//contar la longitud de un arreglo
const longitud_array = () => {

    console.log(marcas.length);
}

//Acceder a un elemento de Array mediante su índice
const Acceder_array = () => {
    let primero = marcas[0];
    let ultimo = marcas[marcas.length - 1];
    console.log(primero);
    console.log(ultimo);

} 

//Recorrer un Array
const recorrer_array = () => {
    marcas.forEach((element, indice, array) => {
        console.log(element, indice);
    });


}

//Añadir un elemento al final de un Array
const Anadir_un_elemento_al_array = () => {

    let añadir_marca = marcas.push ('ferrari');
    console.log(añadir_marca);

}

//Eliminar el último elemento de un Array
const eleminar_elemeto_del_array = () => {
    let ultimo = marcas.pop();
    console.log(ultimo);
}

//Añadir un elemento al principio de un Array
const anadir_elemento_al_principio = () => {
    let añadir_elemento = marcas.unshift('ferrari');
    console.log(añadir_elemento);

}

//Eliminar el primer elemento de un Array
const eliminar_el_primer_elemento_Array = () => {
    let eliminar = marcas.shift();
    console.log(eliminar)
}

//Encontrar donde esta ubicado el elemnto
const Encontrar_posicion_elemento = () => {

    let pos = marcas.indexOf('Fiat');
    console.log(pos);
}

//Eliminar un único elemento mediante su posición
const eliminar_un_elemento_por_posicion = () => {
    var pos= 0
    let elementoEliminado = marcas.splice(pos, 3);

    console.log(elementoEliminado);
}

//Eliminar varios elementos a partir de una posición
const eliminar_varios_elementos = () => {

    let marcas = ['ford', 'rebnault', 'volkswagen', 'seat', 'Peugeot', 'Chevrolet', 'Fiat', 'Toyota', 'Chery'];

    let pos = 1,  numElementos =2;

    let elementosEliminados = marcas.splice(pos, numElementos);
    console.log(elementosEliminados);

    console.log(marcas);
}

//Copiar un Array
const copiar_array = () => {
let copiar = marcas.splice();
console.log(copiar);

}



const boton1 = document.getElementById("btn_1");
boton1.addEventListener("click", longitud_array);
const boton2 = document.getElementById("btn_2");
boton2.addEventListener("click", Acceder_array)
const boton3 = document.getElementById("btn_3");
boton3.addEventListener("click", recorrer_array);

const boton4 = document.getElementById("btn_4");
boton4.addEventListener("click", Anadir_un_elemento_al_array);

const boton5 = document.getElementById("btn_5");
boton5.addEventListener("click", eleminar_elemeto_del_array);


const boton6 = document.getElementById("btn_6");
boton6.addEventListener("click", anadir_elemento_al_principio);

const boton7 = document.getElementById("btn_7");
boton6.addEventListener("click", eliminar_el_primer_elemento_Array);

const boton8 = document.getElementById("btn_8");
boton8.addEventListener("click", Encontrar_posicion_elemento);

const boton9 = document.getElementById("btn_9");
boton9.addEventListener("click", eliminar_varios_elementos);

const boton10 = document.getElementById("btn_10");
boton10.addEventListener("click", copiar_array);

