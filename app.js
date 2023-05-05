const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
require('dotenv').config();

//para poder hacer peticiones al servidor
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

//conection bd
mongoose.connect(process.env.DATABASE, {
  useUnifiedTopology: true
}).then(()=>{
  console.log('connect')
})

const port = process.env.PORT;

app.listen(port, () => {
    console.log('aplicacion ejucatandose', port);
});



//seteamos el motor para la plantilla EJS
app.set('view engine', 'ejs')

//para la carpeta public que sera estatica para archivos css, img, js
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

const index = require('./src/routes/index');
app.use(index);


const rutas = require('./src/routes/routes');
app.use(rutas);
