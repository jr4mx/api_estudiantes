
const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantesController.');

router.get('/estudiantes', estudiantesController.getStudents);

module.exports = router;
