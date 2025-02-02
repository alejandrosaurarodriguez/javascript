// Clases del CRM
class Cliente {
    constructor(id, nombre, email, telefono) {
      this.id = id;
      this.nombre = nombre;
      this.email = email;
      this.telefono = telefono;
    }
  }

  class Producto {
    constructor(id, nombre, precio) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
    }
  }

  class Orden {
    constructor(id, cliente) {
      this.id = id;
      this.cliente = cliente;
      this.productos = [];
    }
  }

  class CRM {
    constructor() {
      this.clientes = [];
      this.productos = [];
      this.ordenes = [];
      this.siguienteIdCliente = 1;
      this.siguienteIdProducto = 1;
      this.siguienteIdOrden = 1;
    }

    agregarCliente(nombre, email, telefono) {
      const cliente = new Cliente(this.siguienteIdCliente++, nombre, email, telefono);
      this.clientes.push(cliente);
      actualizarVista();
    }

    agregarProducto(nombre, precio) {
      const producto = new Producto(this.siguienteIdProducto++, nombre, precio);
      this.productos.push(producto);
      actualizarVista();
    }

    crearOrden(clienteId) {
      const cliente = this.clientes.find(c => c.id == clienteId);
      if (cliente) {
        const orden = new Orden(this.siguienteIdOrden++, cliente);
        this.ordenes.push(orden);
        actualizarVista();
      }
    }

    agregarProductoAOrden(ordenId, productoId) {
      const orden = this.ordenes.find(o => o.id == ordenId);
      const producto = this.productos.find(p => p.id == productoId);
      if (orden && producto) {
        orden.productos.push(producto);
        actualizarVista();
      }
    }
  }

  // Instancia del CRM
  const crm = new CRM();

  // Funciones para actualizar la vista
  function actualizarVista() {
    const listaClientes = document.getElementById("listaClientes");
    listaClientes.innerHTML = crm.clientes.map(c => `<li>ID: ${c.id} | ${c.nombre} | ${c.email} | ${c.telefono}</li>`).join("");

    const listaProductos = document.getElementById("listaProductos");
    listaProductos.innerHTML = crm.productos.map(p => `<li>ID: ${p.id} | ${p.nombre} | $${p.precio}</li>`).join("");

    const listaOrdenes = document.getElementById("listaOrdenes");
    listaOrdenes.innerHTML = crm.ordenes.map(o => {
      const productos = o.productos.map(p => p.nombre).join(", ");
      return `<li>ID Orden: ${o.id} | Cliente: ${o.cliente.nombre} | Productos: ${productos || "Ninguno"}</li>`;
    }).join("");
  }

  // Funciones para manejar eventos
  function agregarCliente() {
    const nombre = document.getElementById("nombreCliente").value;
    const email = document.getElementById("emailCliente").value;
    const telefono = document.getElementById("telefonoCliente").value;
    if (nombre && email && telefono) {
      crm.agregarCliente(nombre, email, telefono);
    }
  }

  function agregarProducto() {
    const nombre = document.getElementById("nombreProducto").value;
    const precio = parseFloat(document.getElementById("precioProducto").value);
    if (nombre && !isNaN(precio)) {
      crm.agregarProducto(nombre, precio);
    }
  }

  function crearOrden() {
    const clienteId = parseInt(document.getElementById("idClienteOrden").value);
    if (!isNaN(clienteId)) {
      crm.crearOrden(clienteId);
    }
  }

  function agregarProductoAOrden() {
    const ordenId = parseInt(document.getElementById("idOrden").value);
    const productoId = parseInt(document.getElementById("idProductoOrden").value);
    if (!isNaN(ordenId) && !isNaN(productoId)) {
      crm.agregarProductoAOrden(ordenId, productoId);
    }
  }