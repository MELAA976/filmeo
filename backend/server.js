//point d'entrée de l'application 
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config() //charger les variable d'nvironnement
const connectDB = require('./config/db') //connection à mangoDB
const userRoute = require('./routes/userRoute')


// Création de l'instance express
const app = express();

app.use(express.json()); //

//gestion des ports, utilisation du port dans le variable d'environnement
//ou le 3000 par defaut
const port = 3000 


//connection à la basse de donnéess
mongoose.connect('mongodb://127.0.0.1/filmeo')
.then(() => {console.log('connexion étable')
    console.log('Base de donnée', mongoose.connection.name);
    ;
}).catch(err => {
    console.error('problème de connexion à MongoDB:', err.message);    
})

// Middleware 
app.use("/api/users", userRoute) //autorisé la route user Route 

// app.get('/', (req, res) => {
//     res.send('Bienvenue sur ma page')
// })

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
  })
  