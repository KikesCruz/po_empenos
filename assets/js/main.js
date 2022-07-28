import Empenos from "./empenos.js";

window.addEventListener('load', function () {
    mod_empeno.monto.addEventListener("keypress", validateNumbers, false);
    document.querySelector('form')
        .addEventListener('submit', e => {
            e.preventDefault()
            const data = Object.fromEntries(new FormData(e.target));
            calcular(data);

        })
});

function validateNumbers(e) {
    let keys = window.event ? e.which : e.keyCode;
    if (keys < 48 || keys > 57) {
        e.preventDefault();
        alert('Ingresa solo números');
    }
}


function calcular(data) {

    const empenos = new Empenos;
    empenos.estableMonto = Number(data.monto);
    let percentage = [0.50, 0.35, 0.30, 0.25, 0.20, 0.15];

    if (empenos._monto >= 200 && empenos._monto <= 999) {
        empenos.estableMargen = percentage[0];
    } else if (empenos._monto >= 1000 && empenos._monto <= 2499) {
        empenos.estableMargen = percentage[1];
    } else if (empenos._monto >= 2500 && empenos._monto <= 4999) {
        empenos.estableMargen = percentage[2];
    } else if (empenos._monto >= 5000 && empenos._monto <= 9999) {
        empenos.estableMargen = percentage[3];
    } else if (empenos._monto >= 10000 && empenos._monto <= 14999) {
        empenos.estableMargen = percentage[4];
    } else if (empenos._monto >= 15000) {
        empenos.estableMargen = percentage[5];
    }

    return rendering(empenos);

}




function rendering(empenos) {
    const result = document.querySelector('#result');

    return result.innerHTML = `
    <div class="item">
    <h3 class="sub_title">MONTO: <span>\$ ${empenos._monto}</span></h3>
    <h3 class="sub_title">MARGEN: <span> ${empenos._margen *100}  %</span></h3>
    <h3 class="sub_title">INGRESO: <span>\$ ${empenos.calcula_ingreso()}</span></h3>
    <h3 class="sub_title">MONTO + INGRESO: <span>\$ ${empenos.monto_ingreso()}</span></h3>
    <h3 class="sub_title">MONTO DE APARTADO: <span class="apartado"> - \$ ${empenos.apartado()}</span></h3>
    </div>
    <div class="item">
    <h2 class="sub_title">TOTAL A ENTREGAR:</h2>
    <span class="entregar">\$ ${empenos.entregar()}</span>
    <h2 class="sub_title">Plazo:</h2>
    <span class="entregar">${empenos.plazo()}</span>
    </div>
    `;

}