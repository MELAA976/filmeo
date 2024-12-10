//point d'entrée de l'application 
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config //charger les variable d'nvironnement
const connectDB = require('./config/db') //connection à mangoDB


// Création de l'instance express
const app = express();


//gestion des ports, utilisation du port dans le variable d'environnement
//ou le 3000 par defaut
const port = 3000 


//connection à la basse de donnéess
mongoose.connect('mongodb://localhost:27017/filmeo');

app.get('/', (req, res) => {
    res.send('Bienvenue sur ma page')
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
  })
  