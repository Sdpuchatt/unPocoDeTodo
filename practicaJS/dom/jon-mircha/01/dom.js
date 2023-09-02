const botonCaja = document.querySelector("#botonCaja");
const contenedor = document.querySelector('.contenedor');
botonCaja.addEventListener('click', function(e){
    e.preventDefault();
    let caja = document.createElement("div");

    caja.classList.add("caja");
    caja.setAttribute('class','negro');
    contenedor.appendChild(caja);
    // alert("hola")
});
