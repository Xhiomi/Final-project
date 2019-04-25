// const products = require('../../db');
const Product = require('../models/product');

function deleteProduct(req, res){
  // const deleteId = req.params.id;
  // products.items = products.items.filter( item => item.id != deleteId);
  //
  // res.send(products.items).status(202);
  Product.remove({
    _id: req.params.id
  })
    .then(results => {
      if(results.n > 0) {
        res.status(200).json({
          message: 'Se borró el elemento.',
          results
        })
      } else {
        res.results(404).json({
          message: 'No se encontró el elemento para borrar.',
        })
      }
    })
    .catch(err => {
      res.status(500).json({
        message: 'No se pudo borrar el elemento.',
        error: err
      })
    })
}

module.exports = deleteProduct;
