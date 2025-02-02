const clientes = [];
const cuentas = [];
const facturas = [];

export function agregarCliente(cliente) {
    clientes.push(cliente);
}

export function obtenerClientes() {
    return clientes;
}

export function agregarCuenta(cuenta) {
    cuentas.push(cuenta);
}

export function agregarFactura(factura) {
    facturas.push(factura);
}
