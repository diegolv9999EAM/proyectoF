let User = require('../models/User')

let UserController = {
    //listar todos los usuarios
    show(req, res) {
        User.find({})
        .then(docs => {
        res.json(docs)
        }).catch(err => {
        res.json(err)
        })      
},
//buscar un user
find(req, res) {
    User.findById({_id:req.params.id})
    .then(docs => {
    res.json(docs)
    }).catch(err => {
    res.json(err)
    })
},
//crear un usuario
store(req, res) {
    User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    }).then(doc => {
    res.json(doc)
    }).catch(err => {
    res.json(err)
    })
    }
}

module.exports = UserController;