const express = require('express');
const router = express.Router();

const ReserveControllers = require('../controllers/ReserveControllers');

router.get('/reserve', ReserveControllers.reserve);
router.get('/reserve/include-reserve', ReserveControllers.reserveInclude);
router.post('/registerReserve', ReserveControllers.reservePost);

module.exports = router;