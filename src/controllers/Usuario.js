const usuario = require('../models/usuario');

// Crear un nuevo usuario
exports.crearUsuario = (req, res) => {
    const { rol, nombre, apellido, email, cedula, telefono, genero, contrasena } = req.body;
    const nuevoUsuario = new usuario({
        rol,
        nombre,
        apellido,
        email,
        cedula,
        telefono,
        genero,
        contrasena
    });
    try {
        nuevoUsuario.save();
        res.json({ msg: 'Usuario creado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
}



// Obtener todos los usuarios
exports.obtenerUsuarios = (req, res) => {
    
    usuario.find({}, (error, usuarios) => {
        if (error) {
            res.status(400).send('Hubo un error');
        } else {
            res.json(usuarios);
        }
    }
    )
}

// Iniciar sesion por roles
