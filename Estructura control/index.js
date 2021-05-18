

const saber_edad = () => {

    const dato = document.querySelector("#inp_dato").value;

    if (dato<=13 && dato>=1) {

        alert(`su edad está entre 1 a 13 años de edad`);

    }
    else{
        if(dato<=21 && dato>=14) {
            alert(`Su edad está entre 14 a 21 años de edad`);
        }
        else{
            alert(`Su edad es mayo a 21 años`);
        }
    }


}

const boton = document.getElementById("btn_result");
boton.addEventListener("click", saber_edad);