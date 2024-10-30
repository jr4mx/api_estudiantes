

const mysql = require('mysql2');

const conexion= mysql.createConnection({
  host: 'localhost',   
  user: 'root',
  password: '',
  database: 'estudiantes_prog3a'  
});
conexion.connect((err) => {
  if (err) {
    console.error('Error de conexión a MySQL:', err);
    return;
  }
  console.log('Conectado a MySQL.');
});

module.exports = conexion