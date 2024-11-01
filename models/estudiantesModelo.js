const db = require('../config/db');

const Estudiante = {
  getAll: (callback) => {
    const query = 'SELECT * FROM estudiantes';
    db.query(query, (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results);
    });
  }
};

module.exports = Estudiante;
