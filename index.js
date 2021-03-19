const express = require('express');

// Crear el servidor
const app = express();

// Puerto y crear Servidor
app.listen(4000, () => {
  console.log('Servidor funcionando');
});
