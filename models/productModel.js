// models/product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    images: [String], // Array for multiple images
    singleImage: String, // Field for a single image
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
