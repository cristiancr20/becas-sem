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

exports.iniciarSesion = (req, res) => {

    const { email, contrasena } = req.body;

    console.log(req.body)
    usuario.findOne({ email }, (error, user) => {
        if (error || !user) {
            console.log("Error, persona no encontrada");
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Error, persona no encontrada',
              })
        }

        const correo = user.email;
        const password = user.contrasena;
        const rol = user.rol;

        if (correo === email && contrasena === password && rol === "Tester") {
            console.log("Bienvenido Tester");
            
            res.redirect('/tester');
        } else if (correo === email && contrasena === password && rol === "Estudiante") {
            console.log("Bienvenido Estudiante");
            res.redirect('/estudiante');
        }
        else {
            console.log("Campos Invalidos");
            
        }
    })
}