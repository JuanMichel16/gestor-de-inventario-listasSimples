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
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.costo = costo;
        this.siguiente = null;  
    }


    getTotal() {
        let total = 0;
        total = this.cantidad*this.costo;

        return total
    }
}