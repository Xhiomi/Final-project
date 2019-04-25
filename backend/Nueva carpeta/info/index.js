const express = require('express');
const routerInfoBackend = express.Router();
const Info = require('../models/schema.js');

productsRouter.use(express.json());

const getProducts = require('./getProducts');
const createProduct = require('./createProduct');
const editProduct = require('./editProduct');
const deleteProduct = require('./deleteProduct');
const getSingleProduct = require('./getSingleProduct');

//Methods
productsRouter.get('/', getProducts);
productsRouter.get('/:id', getSingleProduct);

productsRouter.post('/', createProduct);
productsRouter.put('/:id', editProduct);
productsRouter.delete('/:id', deleteProduct);

// routerInfoBackend.get('/', (req, res) => {
//   Info.find()
//     .then(info => {
//       res.status(200).json(info)
//     })
//     .catch(err => {
//       res.json({
//         err: err
//       })
//     })
// })

module.exports = routerInfoBackend;
