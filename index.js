const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const methodOverride = require('method-override');

const PORT = 5000;

app.use('/uploads', express.static('uploads'));

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));

const productRoutes = require('./routes/products');

mongoose.connect('mongodb://localhost:27017/multiple-image-ejs');
app.get('/', (req, res) => {
    res.send("multiple images")
})

app.use('/products', productRoutes);


app.listen(PORT, () => {
    console.log("listen post number" + PORT)
})
