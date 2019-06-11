// 1. Importaciones / Requerimientos
const express = require('express')
const mongoose = require('mongoose')

const app = express()


// 2. Middlewares / Cadeneros
mongoose.connect('mongodb://localhost:27017/libreria', { useNewUrlParser: true, useCreateIndex: true }, (err) => {
    if (err){
        return err
    }
console.log("conectado con mongo")
})
//Parche, antes de que entre al servidor, json  y pueda usar :
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// 3. Modelos
const {Libro} = require('./models/Libro.js')

const {Revista} = require('./models/Revista.js')

// Libro.Libro.libroSchema

// 4. Rutas
// propiedades para manipular-extraer datos GET - POST - PUT - DELETE / CRUD
//Rutas de libros
app.get('/libros', (req, res) => {
Libro.find({}, (err, libros) => {
    res.send(libros)
})
})


app.get('/revistas', (req, res) => {
    Revista.find({}, (err, result) => {
        res.send(result)
    })
    })


    app.get('/libros/:librosId', (req, res) => {
        Libro.findById({}, (err, libros) => {
            res.send(libros)
        })
        })


//metodo para indicar al serv una instruccion y, checa y  utilize los datos
app.post ('/libros/nuevo', (req, res) => {
    //a. Capturar los datos del req
    const nuevoLibro = new Libro(req.body)
    //console.log(nuevoLibro)
    //b. insertarlos a la colección de la base de datos
    //res.send()
    nuevoLibro.save((err, datosInyeccion) => {
        if (err){
            return err
        }
        res.send(datosInyeccion)
    })
//res.send("la ruta funciona")
})

//
/*
app.put ('/:id', (req, res) => {  
    const {id} = req.params;
    const {titulo, paginas, descripcion, autor} = req.body
if (titulo && paginas && descripcion && autor){
    _.each(libros, (libros, i) =>{
        if(libros.id == id){
            libros.titulo = titulo;
            libro.paginas = paginas;
            libros.descripcion = descripcion;
            libros.autor = autor;
        }
    });
    res.json(libros);
} else{
    res.status(500).json({error: 'errors'})
}
});  */

app.put ('/libros/:id', (req, res) => {  
    Libro.findOneAndUpdate({_id: req.params.id}, req.body)
    .then (function (){
        Libros.findOne({_id: req.params.id})
        .then (function(libros){
            res.send(libros);

        })
    
    });
  });


/*
app.put = ('/libros', (req, res) => {  
    Libro.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, libros) {
      if (err)
        res.send(err);
      res.json(libros);
    });
  });
  
  app.put ('libros/:librosid', (req, res) => {  
    Libro.findById({_id: req.params.id}, function(err, libros) {
    if (err)
      res.send(err);
    res.json(libros);
  });
}); 

app.put ('/libros/:librosId', (req, res) => {  
    Libro.findOneAndUpdate({_id: req.params.id}, req.body)
    .then (function (){
        res.send(libros);
    
    });
  });
  
  
  */



//actualizar
// app.put('/libros/',  (req, res) => {
//     res.send('Got a PUT request at /libros');
//   });
  




//delete
// app.delete('/libros', (req, res) => {
//     res.send('Got a DELETE request at /user');
//   });
  



// 5. Listener
app.listen(3002, () => {
console.log("todo bien")
})

