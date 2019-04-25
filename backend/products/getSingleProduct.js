// const products = require('../../db');
const Product = require('../models/product');

function getSingleProduct(req, res) {
  const productId = req.params.id;
  // -----con for e if --------
  // for(let item of  products.items) {
  //   if(item.id == productId) {
  //     res.json(item).status(200);
  //   }
  // }
  // res.send('No se encontró ese producto').status(404);

  // ------ Con filter -----------
  // const requestedProduct = products.items.filter(function(item) {
  //   return item.id == productId;
  // })

  // const requestedProduct = products.items.filter(item => item.id == productId)
  //
  // if(requestedProduct.length != 0) {
  //   res.json(requestedProduct[0]).status(200);
  // } else {
  //   res.send('No se encontró ese producto').status(404);
  // }

  Product.findById(req.params.id)
    .then(doc => {
      if(doc){
        res.status(200).json(doc)
      }
      else {
        res.status(404).json({
          message: 'El ID que buscas no existe.'
        })
      }
    })
    .catch(err => {
      res.status(500).json({
        message: 'El formato de ID está mal.',
        error: err
      })
    })
}

module.exports = getSingleProduct;
