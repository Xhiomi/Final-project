// const products = require('../../db');
//
// onst mongoose = require('mongoose');
// const productSchema = require('./model.js');
//
// var Product = mongoose.model('Product', productSchema);
//
// function getProducts(req, res) {
//
// Product.find({}, 'nombre', function(){
//
// })
// var product = new Product(req.body)
//
//   // const newItem = req.body;
//   // newItem.id = products.items.length + 1;
//   // products.items.push(newItem);
//
//   product.save(function(err, product) {
//     if(err) res.send(err).status(404);
//
//
//     res.send(newItem).status(201);
//   });
// }
//
// function getProducts(req, res) {
//   res.json(products);
// }
//
// // module.exports = getProducts;
// const mongoose = require('mongoose');
// const productSchema = require('./model.js');

const Product = require('../models/product');

// var Product = mongoose.model("Product", productSchema);

function getProducts(req, res) {
  // Product.find({}, 'nombre', function(err, products){
  //   if (err) res.send(err).status(400);
  //   res.send(products).status(200);
  Product.find()
    .then(docs => {
      res.status(200).json(docs);
    })
    .catch(err => {
      res.status(500).json({
        error: err
      })
    })
  // });
};

module.exports = getProducts;
