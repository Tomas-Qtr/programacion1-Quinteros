
var mi_lista = [

];




const listar = () => {  

    let lista_item = [];

    mi_lista.forEach(element => {
        //console.log(element.tarea)
        let item = `
        
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">${element.tarea}</div>
            </div>
            <span class="badge bg-primary rounded-pill">${element.tiempo}hs</span>
        </li>
        
        `
        lista_item.push(item);
    });

    document.getElementById("mistareas").innerHTML = lista_item.join("");

}

const guardar = () => {
    //aca guardamos nuevas tareas
    const ta = document.getElementById("inp_tarea").value;
    const ti = document.getElementById("inp_tiempo").value;
    const nueva_tarea = {
        tarea: ta,
        tiempo:ti
    }

    mi_lista.push(nueva_tarea);
    
    listar();
}


//declaramos la ID del boton, y el evento se va a ejecutar
const boton = document.getElementById("btn_guardar");
boton.addEventListener("click", guardar);
