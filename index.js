const productos = [
  {
    id: 1,
    nombre: "Producto 1",
    precio: 100,
    descripcion: "Descripcion del producto 1",
    imagen:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F624790871679098982%2F&psig=AOvVaw2X_Z_7Z_X_Z_X_QZ_X_X&ust=1589788240870000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDyq-_3-gCFQAAAAAdAAAAABAD",
  },
];

function listar(timeout) {
  let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, timeout);
  });
  return promesa;
}
function listarPorID(id, timeout) {
  let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      let producto = productos.find((producto) => producto.id == id);
      if (producto) {
        resolve(producto);
      } else {
        reject("No se encontro el producto");
      }
    }, timeout);
  });
  return promesa;
}

exports.listar = listar;
exports.listarPorID = listarPorID;
