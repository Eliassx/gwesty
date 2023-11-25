const express = require('express');
const router = express.Router();

const ProductsControllers= require('../controllers/ProductsControllers');

router.get('/products', ProductsControllers.products);
router.post('/registerProducts', ProductsControllers.productsPost);

module.exports = router;