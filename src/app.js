'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express()
const router = express.Router();

//connect MongoDB
mongoose.connect('mongodb+srv://danrley:159753456@caseshop.kklx4.gcp.mongodb.net/Url?retryWrites=true&w=majority'); 

//carregar Models
const Url = require('./Models/Url');

//carregar Routs
const urlRoute = require('./Routes/Url');
const urlShort = require('./Routes/Short');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Chamando as rotas criadas.
app.use('/', urlRoute);
app.use('/short', urlShort);

module.exports = app;