const express = require('express');
const mongoose = require('mongoose');




const app = express();
const port = process.env.PORT || 3000 //gestion des ports

//Configuration des middlewares
app.use(express.json());
app.use

//connection à la basse de donnéess

mongoose.connect()

app.get('/', (req, res) => {
    res.send('Bienvenue sur ma page')
})