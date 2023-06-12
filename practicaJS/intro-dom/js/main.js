window.onload = () =>{

    const titulo = document.getElementById('titulo');
    console.log(titulo);
    titulo.innerText = 'Texto actualizado desde main.js';

    const parrafo = document.getElementById('parrafo');
    parrafo.innerHTML = '<li>elemento 1</li><li>elemento 2</li>'
}