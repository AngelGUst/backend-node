const mongoose = require('mongoose');
// Definición del esquema para Producto
const productoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre del producto es obligatorio'],
        trim: true
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción del producto es obligatoria'],
        trim: true
    },
    precio: {
        type: Number,
        required: [true, 'El precio del producto es obligatorio'],
        min: [0, 'El precio no puede ser negativo']
    },
    stock: {
        type: Number,
        required: [true, 'El stock del producto es obligatorio'],
        min: [0, 'El stock no puede ser negativo'],
        default: 0
    },
    categoria: {
        type: String,
        required: [true, 'La categoría del producto es obligatoria'],
        trim: true
    },
    activo: {
        type: Boolean,
        default: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
});
// Creación del modelo
const Producto = mongoose.model('Producto', productoSchema);
module.exports = Producto;