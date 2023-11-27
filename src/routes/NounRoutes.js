const express = require('express');
const router = express.Router();

const NounControllers= require('../controllers/NounControllers');

router.get('/noun', NounControllers.noun);
router.get('/noun/include-noun', NounControllers.nounIncludes);
router.post('/registerNoun', NounControllers.nounPost);

module.exports = router;