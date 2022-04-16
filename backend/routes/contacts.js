const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const adminAuth = require('../middleware/adminAuth');

const contactsCtrl = require('../controllers/contacts');

router.post('/', contactsCtrl.postContact);

module.exports = router;