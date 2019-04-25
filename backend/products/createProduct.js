// const products = require('../../db');
const mongoose = require('mongoose');
// const productSchema = require('./model.js');
const Product = require('../models/product');
// var Product = mongoose.model('Product', productSchema);
function createProduct(req, res) {
  const newProduct = new Product({
    _id: new mongoose.Types.ObjectId(),
    nombre: req.body.nombre,
    tipo: req.body.tipo,
    precio: req.body.precio,
    talla: req.body.talla,
    color: req.body.color,
    stock: {
      sur: req.body.sur,
      norte: req.body.norte,
    }
  });

  newProduct.save()
  .then(result => {
    res.status(201).json({
      message: "Se creó un producto correctamente",
      nuevoProducto: newProduct
    })
  })
  .catch(err => {
    res.status(500).json({
      error: err
    })
  })
// var product = new Product(req.body)

  // const newItem = req.body;
  // newItem.id = products.items.length + 1;
  // products.items.push(newItem);

  // product.save(function(err, product) {
  //   if(err) res.send(err).status(404);
  //   res.send(newItem).status(201);
  // });
};

module.exports = createProduct;
