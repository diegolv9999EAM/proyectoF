let express = require('express');
let PlaceController = require('../controllers/PlaceController');
let UserController = require('../controllers/UserController');

let router = express.Router();


router.get('/places', PlaceController.show);//listar todos los lugares
router.get('/places/:id', PlaceController.find);// buscar un lugar por id
router.post('/places', PlaceController.store);//crear un lugar 
router.put('/places/:id', PlaceController.update);//actualizar un lugar
router.delete('/places/:id', PlaceController.destroy);//eliminar un lugar

router.get('/users', UserController.show);//listar todos los lugares
router.get('/users/:id', UserController.find);// buscar un lugar por id
router.post('/users', UserController.store);//crear un lugar 

module.exports = router;