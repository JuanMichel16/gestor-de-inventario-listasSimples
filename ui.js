export default class UI {
    constructor() {}

    mostrarMensaje(mensaje, tipo) {
        const lugarMensaje = document.querySelector('#mensaje1');
        const divMensaje = document.createElement('div');

        if(tipo === 'error') {
            divMensaje.classList.add('error');
        } else {
            divMensaje.classList.add('correcto');
        }

        divMensaje.textContent = mensaje;
        lugarMensaje.appendChild(divMensaje);
    }
}