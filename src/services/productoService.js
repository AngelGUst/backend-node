const Producto = require('../models/Productos');
// Servicio para la lógica de negocio relacionada con productos
class ProductoService {
    // Obtener todos los productos
    async obtenerTodos() {
        try {
            return await Producto.find({ activo: true });
        } catch (error) {
            throw new Error(`Error al obtener productos: ${error.message}`);
        }
    }
    // Obtener un producto por ID
    async obtenerPorId(id) {
        try {
            const producto = await Producto.findById(id);
            if (!producto) {
                throw new Error('Producto no encontrado');
            }
            return producto;
        } catch (error) {
            throw new Error(`Error al obtener el producto: ${error.message}`);
        }
    }
    // Crear un nuevo producto
    async crear(productoData) {
        try {
            const nuevoProducto = new Producto(productoData);
            return await nuevoProducto.save();
        } catch (error) {
            throw new Error(`Error al crear el producto: ${error.message}`);
        }
    }
    // Actualizar un producto existente
    async actualizar(id, productoData) {
        try {
            const productoActualizado = await Producto.findByIdAndUpdate(
                id,
                productoData,
                { new: true, runValidators: true }
            );
            if (!productoActualizado) {
                throw new Error('Producto no encontrado');
            }
            return productoActualizado;
        } catch (error) {
            throw new Error(`Error al actualizar el producto: ${error.message}`);
        }
    }
    // Eliminar un producto (borrado lógico)
    async eliminar(id) {
        try {
            const producto = await Producto.findByIdAndUpdate(
                id,
                { activo: false },
                { new: true }
            );
            if (!producto) {
                throw new Error('Producto no encontrado');
            }
            return { message: 'Producto eliminado correctamente' };
        } catch (error) {
            throw new Error(`Error al eliminar el producto: ${error.message}`);
        }
    }
    // Eliminar un producto permanentemente
    async eliminarPermanente(id) {
        try {
            const resultado = await Producto.findByIdAndDelete(id);
            if (!resultado) {
                throw new Error('Producto no encontrado');
            }
            return { message: 'Producto eliminado permanentemente' };
        } catch (error) {
            throw new Error(`Error al eliminar permanentemente el producto: ${error.message}`);
        }
    }
}
module.exports = new ProductoService();