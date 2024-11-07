
const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantesController.');


// Ruta para obtener todos los estudiantes
router.get('/students',estudiantesController.getAllStudents);

// Ruta para obtener estudiantes por estatus
router.get('/students/status/:estatus', estudiantesController.getStudentsByStatus);

// Ruta para agregar un nuevo estudiante
router.post('/students', estudiantesController.addStudent);

// Ruta para modificar un estudiante existente
router.put('/students/:id', estudiantesController.updateStudent);

// Ruta para eliminar un estudiante
router.delete('/students/:id', estudiantesController.deleteStudent);


module.exports = router;
