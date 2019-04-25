const express = require('express');
const productsRouter = express.Router();

productsRouter.use(express.json());

//Midlewares
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



module.exports = productsRouter;
