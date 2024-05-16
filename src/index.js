const express = require('express')
const app = express()
const PORT = 3000

require('./db')

app.use('/', (req, res) =>{
  res.send('hola mundo, estoy aprendiendo docker y NO funcionaaaaaaaaaaa')
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});