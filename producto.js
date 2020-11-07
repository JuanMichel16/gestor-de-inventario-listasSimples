export default class Producto {
    /**
     * 
     * @param {string} codigo 
     * @param {string} nombre 
     * @param {string} descripcion 
     * @param {number} cantidad 
     * @param {number} costo 
     */
    constructor(codigo, nombre, descripcion, cantidad, costo) {
        this._codigo = codigo;
        this._nombre = nombre;
        this._descripcion = descripcion;
        this._cantidad = cantidad;
        this._costo = costo;
        this._siguiente = null;  
    }

    get anterior() {
        return this._anterior
    }

    get siguiente() {
        return this._siguiente
    }

    get codigo() {
        return this._codigo;
    }

    get nombre() {
        return this._nombre
    }

    get descripcion() {
        return this._descripcion
    }

    get cantidad() {
        return this._cantidad
    }

    get costo() {
        return this._costo
    }

    getTotal() {
        let total = 0;
        total = this._cantidad*this._costo;

        return total
    }
}