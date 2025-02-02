import { agregarCliente, obtenerClientes } from "../models/ClientModel.js";

export function crearCliente(nombre, email) {
    const id = obtenerClientes().length + 1;
    const cliente = { id, nombre, email, cuentas: [], facturas: [] };
    agregarCliente(cliente);
    return cliente;
}

export function listarClientes() {
    return obtenerClientes();
}
