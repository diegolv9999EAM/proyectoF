let Place = require('../models/Place')

let PlaceController = {
    //listar todos los lugares
    show(req, res) {
        Place.find({})
        .then(docs => {
        res.json(docs)
        }).catch(err => {
        res.json(err)
        })      
},
//buscar un lugar
find(req, res) {
    Place.findById({_id:req.params.id})
    .then(docs => {
    res.json(docs)
    }).catch(err => {
    res.json(err)
    })
},
//actualizar un lugar
update(req, res) {
    Place.update({_id:req.params.id},{
        name: req.body.name,
        description: req.body.description 
    })
    .then(docs => {
    res.json(docs)
    }).catch(err => {
    res.json(err)
    })
},
//eliminar un lugar
destroy(req, res) {
    Place.findByIdAndRemove({_id:req.params.id})
    .then(docs => {  //()=>{
    res.json(docs)//quitar docs y colomcar {mensage: "ok"}
    }).catch(err => {
    res.json(err)
    })
},
//crear un lugar
store(req, res) {
    Place.create({
    name: req.body.name,
    description: req.body.description
    }).then(doc => {
    res.json(doc)
    }).catch(err => {
    res.json(err)
    })
    }
}

module.exports = PlaceController;