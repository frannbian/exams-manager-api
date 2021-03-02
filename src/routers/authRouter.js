const express = require('express');
const authController = require("../controllers/authController");
const auth = require('../middleware/authMiddleware');

const router = new express.Router();

router.post('/api/v1/auth/register', authController.register);
router.post('/api/v1/auth/login', authController.login);
router.get('/api/v1/auth/me', auth, authController.me);

module.exports = router;
