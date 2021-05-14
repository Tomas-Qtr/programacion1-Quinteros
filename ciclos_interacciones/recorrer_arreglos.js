const recorrer_arreglo = () => {
    let nombre = ['pepe','juan','jose','carlos'];

    nombre.forEach(elements => {
        console.log(elements);

        
    });

}

const boton2= document.querySelector("#btn_recorrer_arreglo");
boton2.addEventListener("click", recorrer_arreglo)