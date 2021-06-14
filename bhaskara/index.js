const calcular_baskara = () => {
    const a = document.getElementById("inp_a").value;
    const b = document.getElementById("inp_b").value;
    const c = document.getElementById("inp_c").value;

    const dentro = (b ** 2) - 4*a*c;
    const raiz = Math.sqrt(dentro + (dentro*dentro));
    const result1 = (-b + raiz) / (2*a) ;
    const result2 = (-b - raiz) / (2*a) ;
    console.log(raiz);
    console.log(dentro); 
    document.getElementById("p_texto").textContent = `
    
    x1 = ${result1}
    x2 = ${result2}

    
    `;
}


const boton = document.getElementById("btn_calcular");
boton.addEventListener("click", calcular_baskara);