const express = require('express');
const router = express.Router();

const IncomeControllers = require('../controllers/IncomeControllers');

router.get('/income', IncomeControllers);

module.exports = router
