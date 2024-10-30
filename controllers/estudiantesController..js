const Estudiante = require('../models/estudiantesModelo');

const getStudents = (req, res) => {
  Estudiante.getAll((err, estudiantes) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener estudiantes' });
    }
    res.status(200).json(estudiantes);

  });
};
module.exports = {
  getStudents
};
