const mostrar_datos_tablas = async () => {

    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const datos = await data.json();

    const fila_datos = [];

    datos.forEach(element => {
        console.log(element.name);
        //recorremos elementos por elemento para guardar
        let fila = `
        
        <tr>
            <td>#${element.id}</td>
            <td>${element.username}</td>
            <td>${element.email}</td>
            <td>${element.phone}</td>
        </tr>
        `;
        // almacena la variable fila
        fila_datos.push(fila);
        
    });

    document.getElementById("tb_tabla").innerHTML = fila_datos.join("");

}

const boton = document.getElementById("btn_tabla");
boton.addEventListener("click", mostrar_datos_tablas);