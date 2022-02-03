const productos = require("./index.js");

let infoProductos = productos.listarPorID(1, 4000);
infoProductos
  .then((productos) => {
    console.log("Producto encontrado: ", productos);
  })
  .catch((error) => {
    console.log(error);
  });
