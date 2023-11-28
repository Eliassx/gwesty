const express = require('express');
const router = express.Router();

const ComsuptionControllers = require('../controllers/ComsuptionControllers');

router.get('/comsuption', ComsuptionControllers.comsuption);
router.get('/comsuption/include-comsuption', ComsuptionControllers.comsuptioninclude);
router.post('/registerComsuption', ComsuptionControllers.comsuptionPost);

module.exports = router
