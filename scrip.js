const valorTicket = 200;
const descuentoEstudiante = 0.8;
const descuentoTrainee = 0.5;
const descuentoJunior = 0.15;

const cantidad = document.getElementById(`cantidad`);
const categoria = document.getElementById(`categoriaSelect`);
const botonResumen = document.getElementById(`resumen`);
const botonReset = document.getElementById(`borrar`);
const pagar = document.getElementById(`total`);

function totalPagar() {
    let totalPagar = (cantidad.value) * valorTicket;
    if (categoria.value == 1){
        totalPagar = totalPagar - (totalPagar*descuentoEstudiante)
    } else if (categoria.value == 2){
        totalPagar = totalPagar - (totalPagar*descuentoTrainee)
    } else if (categoria.value == 3){
        totalPagar = totalPagar - (totalPagar*descuentoJunior)
    }
    pagar.innerHTML = `TOTAL A PAGAR : $${totalPagar}`;
}
botonResumen.addEventListener(`click`, totalPagar);

botonReset.addEventListener(`click`,()=> 
{pagar.textContent= `TOTAL A PAGAR :`;
})