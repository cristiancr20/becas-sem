const beca = require('../models/beca');
const usuario = require('../models/usuario');

//HACE EL ESTUDIANTE
// Crear una nueva beca
exports.crearBeca = (req, res) => {

    const { nombre, apellido, email, cedula, telefono, genero, tipoBeca, fichaEstudiantil, estado } = req.body;
    const nuevaBeca = new beca({
        nombre,
        apellido,
        email,
        cedula,
        telefono,
        genero,
        tipoBeca,
        fichaEstudiantil,
        estado: "Pendiente",
    });
    try {
        nuevaBeca.save();
        console.log(req.body)
        res.json({ msg: 'Beca solicitada correctamente' });
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
}



//HACE EL TESTER

// Obtener todas las becas pendientes
exports.obtenerBecas = (req, res) => {
    beca.find({ estado: "Pendiente" }).exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        return res.render('tester_revisar_becas.ejs', { data: data })
        /* console.log(data) */
    })
}

// Obtener todas las becas aprobadas
exports.obtenerBecasAprobadas = (req, res) => {
    beca.find({ estado: "Aprobada" }).exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        return res.render('tester_solicitudes_aprobadas.ejs', { data: data })
        /* console.log(data) */

    })
}

// Obtener todas las becas rechazadas

exports.obtenerBecasRechazadas = (req, res) => {
    beca.find({ estado: "Rechazada" }).exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        return res.render('tester_solicitudes_rechazadas.ejs', { data: data })
        /* console.log(data) */

    })
}

//Editar beca aprobada (aprobar beca)
exports.editarBecaAprobada = (req, res) => {
    const id = req.params._id;
    beca.findByIdAndUpdate(id, { estado: "Aprobada" }, { new: true })
        .then((beca) => {
            if (!beca) {
                return res.status(404).send({
                    message: "No se encontro la beca con el id " + id
                });
            }
            res.redirect('/solicitudes/becas')
        }).catch((err) => {
            return res.status(404).send({
                message: "Error al actualizar la beca con el id " + id
            });
        }
        );
}

//Editar beca rechazada (rechazar beca)
exports.editarBecaRechazada = (req, res) => {
    const id = req.params._id;
    beca.findByIdAndUpdate(id, { estado: "Rechazada" }, { new: true })
        .then((beca) => {
            if (!beca) {
                return res.status(404).send({
                    message: "No se encontro la beca con el id " + id
                });
            }
            res.redirect('/solicitudes/becas')
        }).catch((err) => {
            return res.status(404).send({
                message: "Error al actualizar la beca con el id " + id
            });
        }
        );
}

