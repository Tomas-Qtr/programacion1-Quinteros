const mostar_catalogo = async () => {

    const resultado = await fetch("https://jsonplaceholder.typicode.com/photos?albumId=7");
    
    const datos = await resultado.json();


    const total_columnas = [];

    datos.forEach(element => {

        
        
        //console.log(element.title);

        let columna = ` 
        <div class="col-lg-3">
            <div class="card" >
                <img src="${element.url}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>


        </div>`

        total_columnas.push(columna);

        document.getElementById("row_images").innerHTML = total_columnas.join("");

    });

    

}

const boton = document.getElementById("btn_mostar");
boton.addEventListener("click" , mostar_catalogo);