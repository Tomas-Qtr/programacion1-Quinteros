import Auto from './auto.js'

const ejecutar = () => {

    const autito1 = new Auto();

    autito1.kilometro = `44.000klm`;

    autito1.mantenimiento_realizado();

}


const btn = document.getElementById("btn_man");
btn.addEventListener("click", ejecutar);
