const productoService = require('../services/productoService');
// Controlador para manejar las peticiones HTTP relacionadas con producto
class ProductoController {
    // Obtener todos los productos
    async obtenerTodos(req, res) {
        try {
            const productos = await productoService.obtenerTodos();
            return res.status(200).json({
                exitoso: true,
                datos: productos,
                mensaje: 'Productos obtenidos correctamente'
            });
        } catch (error) {
            return res.status(500).json({
                exitoso: false,
                mensaje: error.message
            });
        }
    }
    // Obtener un producto por ID
    async obtenerPorId(req, res) {
        try {
            const producto = await productoService.obtenerPorId(req.params.id);
            return res.status(200).json({
                exitoso: true,
                datos: producto,
                mensaje: 'Producto obtenido correctamente'
            });
        } catch (error) {
            return res.status(error.message.includes('no encontrado') ? 404 : 500).j
            son({
                exitoso: false,
                mensaje: error.message
            });
        }
    }
    // Crear un nuevo producto
    async crear(req, res) {
        try {
            const nuevoProducto = await productoService.crear(req.body);
            return res.status(201).json({
                exitoso: true,
                datos: nuevoProducto,
                mensaje: 'Producto creado correctamente'
            });
        } catch (error) {
            return res.status(400).json({
                exitoso: false,
                mensaje: error.message
            });
        }
    }
    // Actualizar un producto
    async actualizar(req, res) {
        try {
            const productoActualizado = await productoService.actualizar(
                req.params.id,
                req.body
            );
            return res.status(200).json({
                exitoso: true,
                datos: productoActualizado,
                mensaje: 'Producto actualizado correctamente'
            });
        } catch (error) {
            return res.status(error.message.includes('no encontrado') ? 404 : 400).
                json({
                    exitoso: false,
                    mensaje: error.message
                });
        }

    }
    // Eliminar un producto (borrado lógico)
    async eliminar(req, res) {
        try {
            const resultado = await productoService.eliminar(req.params.id);
            return res.status(200).json({
                exitoso: true,
                mensaje: resultado.message
            });
        } catch (error) {
            return res.status(error.message.includes('no encontrado') ? 404 : 500).json({
                exitoso: false,
                mensaje: error.message
            });
        }
    }
    // Eliminar un producto permanentemente
    async eliminarPermanente(req, res) {
        try {
            const resultado = await productoService.eliminarPermanente(req.params.id);
            return res.status(200).json({
                exitoso: true,
                mensaje: resultado.message
            });
        } catch (error) {
            return res.status(error.message.includes('no encontrado') ? 404 : 500).json({
                exitoso: false,
                mensaje: error.message
            });
        }
    }
}

module.exports = new ProductoController();