const express = require('express');
const examController = require("../controllers/examController.js");
const auth = require('../middleware/authMiddleware');

const router = new express.Router();

router.post('/api/v1/exams/:id/evaluate', auth, examController.evaluate);

module.exports = router;
