const express = require('express');
const router = express.Router();

const ProductsControllers= require('../controllers/ProductsControllers');

router.get('/home', ProductsControllers.home);
router.get('/products', ProductsControllers.products);
router.get('/products/include-product', ProductsControllers.productsInclude);
router.post('/registerProducts', ProductsControllers.productsPost);

module.exports = router;