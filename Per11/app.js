//import express
const express = require('express');

//import router
const router = require('./routes/api.js');

// Membuat objek express
const app = express();

// Menggunakan middleware
app.use(express.json());

// Menggunakan routing (router)
app.use(router);

// Mendefinisikan port
app.listen(3000);
