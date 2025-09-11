const mongoose = require('mongoose');
const Product = require('../models/product');
const dotenv = require('dotenv');
dotenv.config({ path: __dirname + '/../config/.env' });

const products = require('./products.json');

if (!process.env.DB_URI) {
  console.error('DB_URI not found in environment variables.');
  process.exit(1);
}

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log('Sample products inserted!');
    process.exit();
  })
  .catch(err => {
    console.error('Error inserting products:', err);
    process.exit(1);
  });