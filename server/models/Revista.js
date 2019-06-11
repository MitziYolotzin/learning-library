// 1. Importaciones / Requerimientos
const mongoose = require('mongoose')

// 2. Schema / Esquema
const revistaSchema = mongoose.Schema({
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

// 3. Conversion a Modelo. Nombre del modelo, esquema, nombre de la colección
const Revista = mongoose.model('Revista' , revistaSchema , 'revistas' )



// 4. Exportacion 
module.exports = { Revista }