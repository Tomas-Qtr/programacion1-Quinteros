const recorrer_objetos = () => {

    let misobjetos = [
        {
            nombre: 'pepe',
            apellido: 'argento'
        },
        {
            nombre: 'juan',
            apellido: 'riquelme'
        }
    ];


    misobjetos.forEach(element => {
        console.log(`
        mi nombre es; ${element.nombre}
        mi apellido es; ${element.apellido} 
        
        `);
    });
}

const boton3 = document.getElementById("btn_recorrer_objeto");
boton3.addEventListener("click", recorrer_objetos);