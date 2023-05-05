const express = require ('express');
const router =express.Router();

const usuarioController = require('../controllers/Usuario');
const becaController = require('../controllers/Beca');

router.get('/login', (req, res)=> res.render('login.ejs'));
router.get('/home',(req, res)=> res.render('home.ejs'));
router.get('/registrar',(req, res)=> res.render('registrar.ejs'));
router.get('/solicitar/becas',(req, res)=> res.render('becas.ejs'));


// Crear un nuevo usuario
router.post('/crear/usuario', usuarioController.crearUsuario);
// Iniciar sesión
router.post('/iniciar/sesion', usuarioController.iniciarSesion);
// Obtener todos los usuarios
router.get('/obtener/usuarios', usuarioController.obtenerUsuarios);


//Crear una nueva beca
router.post('/solicitar/beca', becaController.crearBeca);
// Obtener todas las becas
router.get('/obtener/becas', becaController.obtenerBecas);


module.exports = router;