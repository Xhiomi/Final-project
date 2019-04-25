const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Modelo, producto y esquema
var product = new Schema({
  nombre: String,
  tipo: String,
  precio: Number,
  talla: Array,
  color: Array,
  stock: {
    sur: Number,
    norte: Number
  }
});

product.methods.cerificarStockNorte = function () {
  if(products.stock.norte == 0) {
    console.log("No hay stock disponible");
  }
};
product.methods.cerificarStockSur = function () {
  if(products.stock.sur == 0) {
    console.log("No hay stock disponible");
  }
};
module.exports = product;
