const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');
// Rutas para la gestión de productos
router.get('/', productoController.obtenerTodos);
router.get('/:id', productoController.obtenerPorId);
router.post('/', productoController.crear);
router.put('/:id', productoController.actualizar);
router.delete('/:id', productoController.eliminar);
router.delete('/permanente/:id', productoController.eliminarPermanente);
module.exports = router;