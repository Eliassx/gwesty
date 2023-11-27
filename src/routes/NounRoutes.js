const express = require('express');
const router = express.Router();

const NounControllers= require('../controllers/NounControllers');

router.get('/noun', NounControllers.noun);
router.post('/registerNoun', NounControllers.nounPost);

module.exports = router;