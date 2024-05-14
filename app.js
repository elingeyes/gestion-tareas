/* const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hola Mundo')
})

app.listen(3000) */

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

//CONFIGURACION DEL SERVIDOR
app.set('port', process.env.PORT || port);

// Configuración de bodyParser
app.use(bodyParser.urlencoded({ extended: true }));

// Configuración de EJS como motor de plantillas
app.set('view engine', 'ejs');

// Uso de Middlewares
app.use(morgan('dev'));

// Ruta principal
app.get('/', (req, res) => {
    res.send('¡Bienvenido al gestor de tareas!');
  });

  // Ruta para renderizar una vista utilizando EJS
  app.get('/home', (req, res) => {
    // Renderiza el archivo index.ejs y envía la respuesta HTML al cliente
    res.render('index', { mensaje: '¡Bienvenido a al gestor de tareas!' });
});

  // Iniciar el servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
  });