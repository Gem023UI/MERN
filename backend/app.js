const express = require('express');
const app = express();
const cors = require('cors')
const postRoutes = require('./routes/post');
const authRoutes = require('./routes/auth');

app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit: "50mb", extended: true }));
app.use(cors());

app.use('/api/v1', postRoutes);
app.use('/api/v1', authRoutes);


module.exports = app