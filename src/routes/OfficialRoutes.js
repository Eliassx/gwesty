const express = require('express');
const router = express.Router();

const OfficialControllers = require('../controllers/OfficialControllers');

router.get('/', OfficialControllers.login);
router.post('/registerOfficial', OfficialControllers.loginPost);

module.exports = router;
