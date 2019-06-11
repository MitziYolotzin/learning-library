// 1. Importaciones / Requerimientos
const mongoose = require('mongoose')

// 2. Schema / Esquema
const libroSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        unique: 1
    },
    paginas: {
        type: Number
    },
    descripcion : {
        type: String
    },
    autor : {
        type: String
    }
})

// 3. Conversion a Modelo
const Libro = mongoose.model('Libro' , libroSchema , 'libros' )



// 4. Exportacion 
module.exports = { Libro }
