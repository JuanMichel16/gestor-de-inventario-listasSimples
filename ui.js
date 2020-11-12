export default class UI {
    constructor() {}

    mostrarMensaje(mensaje) {
        const lugarMensaje = document.querySelector('#acciones');

        let divMensaje = document.createElement('div');
        divMensaje.textContent = mensaje;

        lugarMensaje.appendChild(divMensaje);
    }
}