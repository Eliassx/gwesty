const express = require('express');
const router = express.Router();

const OfficialControllers = require('../controllers/OfficialControllers');

router.get('/home', OfficialControllers.dashboard);

module.exports = router;