const funcion_respuesta = (numero) => {

    const result = numero % 2;
    let respuesta = '';

    if (result==0) {

        respuesta = `El numero ${numero} es par`;
        
    }
    else {
        respuesta = `El numero ${numero} es impar`;
    }
    

    return respuesta;
}

const funcion_receptora = () => {

    const numero = document.getElementById("inp_numero").value;
    

    const mensaje = funcion_respuesta(numero);

    document.getElementById("respuesta").textContent = mensaje;
   
} 



const boton = document.getElementById("btn_respuesta");
boton.addEventListener("click", funcion_receptora);