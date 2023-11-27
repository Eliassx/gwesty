const express = require('express');
const router = express.Router();

const StocksControllers= require('../controllers/StocksControllers');

router.get('/stocks', StocksControllers.stocks);
router.get('/stocks/include-stock', StocksControllers.stocksInclude);
router.post('/registerStocks', StocksControllers.stocksPost);

module.exports = router;