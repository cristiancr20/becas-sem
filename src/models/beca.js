const mongoose = require('mongoose')

const Beca = mongoose.Schema({
    nombre: {
        type: String,
        trim: true,
        require: true
    },
    apellido: {
        type: String,
        trim: true,
        require: true
    },
    email: {
        type: String,
        trim: true,
        require: true,
        unique: true
    },
    cedula: {
        type: String,
        trim: true,
        require: true,
        unique: true
    },
    telefono: {
        type: String,
        trim: true,
        require: true,
        unique: true
    },
    genero: {
        type: String,
        trim: true,
        require: true
    },
    tipoBeca: {
        type: String,
        trim: true,
        require: true
    },
}, { versionKey: false })

module.exports = mongoose.model('beca', Beca);