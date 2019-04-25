// const products = require('../../db');
const Product = require('../models/product');


function editProduct(req, res) {
  const productId = req.params.id;
  // const newProduct = req.body;
  // const itemsList = products.items;
  //
  // for(let key in itemsList) {
  //   if(itemsList[key].id == productId) {
  //     newProduct.id = itemsList[key].id;
  //     itemsList[key] = newProduct;
  //     res.send(newProduct).status(202);
  //   }
  // }
  // res.send('No existe ese id').status(404);
  Product.update(
    {
    _id: req.params.id
    },
    {
      $set: {
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        precio: req.body.precio,
        talla: req.body.talla,
        color: req.body.color,
        stock: {
          sur: req.body.sur,
          norte: req.body.norte,
        }
      }
    }
  )
  .then(result => {
    res.status(200).json({
      message: 'Se ha modificado el producto.',
      result
    })
  })
  .catch(err => {
    res.status(400).json({
      message: 'No se pudo modificar el producto.',
      error: err
    })
  })
}

module.exports = editProduct;
