const express = require('express');
const router = express.Router();

const StocksControllers= require('../controllers/StocksControllers');

router.get('/stocks', StocksControllers.stocks);
router.post('/registerStocks', StocksControllers.stocksPost);

module.exports = router;