const express = require ('express');
const router =express.Router();

const usuarioController = require('../controllers/Usuario');
const becaController = require('../controllers/Beca');

router.get('/login', (req, res)=> res.render('login.ejs'));
router.get('/estudiante/:_id',(req, res)=> res.render('estudiante_home.ejs'));
router.get('/tester/:_id',(req, res)=> res.render('tester_home.ejs'));
router.get('/registrar',(req, res)=> res.render('registrar.ejs'));
router.get('/estudiante/solicitar/beca/:_id',(req, res)=> res.render('estudiante_solicitar_beca.ejs'));
router.get('/estudiante/revisar/beca/',(req, res)=> res.render('estudiante_revisar_beca.ejs'));


// Redigirir página crear beca
router.get('/redirigir/crear/beca', usuarioController.redirigirCrearBeca);
// Redigirir página revisar beca solcitada
router.get('/redirigir/revisar/beca', usuarioController.listarBeca);





// Crear un nuevo usuario
router.post('/crear/usuario', usuarioController.crearUsuario);
// Iniciar sesión
router.post('/iniciar/sesion', usuarioController.iniciarSesion);
// Obtener todos los usuarios
router.get('/obtener/usuarios', usuarioController.obtenerUsuarios);


//Crear una nueva beca
router.post('/solicitar/beca', becaController.crearBeca);
// Obtener todas las becas
router.get('/solicitudes/becas', becaController.obtenerBecas);
// Obtener todas las becas aprobadas
router.get('/solicitudes/becas/aprobadas', becaController.obtenerBecasAprobadas);
// Obtener todas las becas rechazadas
router.get('/solicitudes/becas/rechazadas', becaController.obtenerBecasRechazadas);

//editar beca aprobada
router.get('/solicitudes/becas/aprobadas/editar/:_id', becaController.editarBecaAprobada);
//editar beca rechazada
router.get('/solicitudes/becas/rechazadas/editar/:_id', becaController.editarBecaRechazada);


module.exports = router;