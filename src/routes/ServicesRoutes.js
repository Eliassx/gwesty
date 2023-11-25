const express = require('express');
const router = express.Router();

const ServicesControllers= require('../controllers/ServicesControllers');

router.get('/services', ServicesControllers.service);
router.post('/registerServices', ServicesControllers.servicePost);

module.exports = router;