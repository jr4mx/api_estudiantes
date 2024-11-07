const express = require('express');
const app = express();
const PORT = 3000;

// Aquí debemos importara las rutas que definamos
const estudiantesRoutes = require('./routes/estudiantesRoutes.js');
const testRoutes = require('./routes/testRoutes');  // Ruta de prueba
app.use(express.json());


app.use('/prueba', (req,res) => {
   res.send('Esto es un ruta de prueba, puedo definir algo aquí');
});  
app.use('/api', estudiantesRoutes);




//para responder con el middleware con json
/*
app.use((req, res) => {
  res.status(404).json({ error: 'No se encontró la API solicitada, consulta al administrador de 3A' });
});
*/
// con html
app.use((req, res) => {
  res.status(404).send('<h1>Error 404</h1><p>La ruta que intentas acceder no existe.</p>');
})


// Iniciar el servidor
app.listen(PORT);


