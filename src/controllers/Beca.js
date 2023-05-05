const {parse, stringify} = require('flatted');

const beca = require('../models/beca');

// Crear una nueva beca
exports.crearBeca = (req, res) => {
    const { nombre, apellido, email, cedula, telefono, genero, tipoBeca } = req.body;
    const nuevaBeca = new beca({
        nombre,
        apellido,
        email,
        cedula,
        telefono,
        genero,
        tipoBeca
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

// Obtener todas las becas
exports.obtenerBecas = (req, res) => {
    
    beca.find({}, (error, becas) => {
        if (error) {
            res.status(400).send('Hubo un error');
        } else {
            res.json(becas);
        }
    }
    )
    
}