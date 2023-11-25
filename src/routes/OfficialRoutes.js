const express = require('express');
const router = express.Router();

const OfficialControllers = require('../controllers/OfficialControllers');

router.get('/home', OfficialControllers.dashboard);
router.get('/host', OfficialControllers.registerComsuption);
router.get('/register/products', OfficialControllers.products);

module.exports = router;