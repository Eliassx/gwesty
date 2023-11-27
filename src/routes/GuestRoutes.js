const express = require('express');
const router = express.Router();

const GuestsControllers = require('../controllers/GuestControllers');

router.get('/guests', GuestsControllers.guest);
router.post('/registerGuest', GuestsControllers.guestPost);

module.exports = router