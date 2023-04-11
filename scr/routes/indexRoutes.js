const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController')

// Generar una ruta, en este caso raiz
router.get('/', indexController.index);
router.get('/menu', indexController.menu);
router.get('/contactenos', indexController.contactenos);
router.get('/quienesSomos', indexController.quienesSomos);
router.get('/ubicacion', indexController.ubicacion);
router.get('/promociones', indexController.promociones)


module.exports = router;

