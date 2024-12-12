const express = require("express");
const user = require('../models/userModel');
const router = express.Router();
const bcrypt = require('bcrypt');

//bcrypt config


// router.get('/', (req, res) => {
//     res.send('Bienvenue sur ma page')
// })

// création de route user
router.post('/', async function (req, res) {
    
    console.dir(res.headersSent) // false
    const newUser = new user(req.body)

    try {

        const checkuser = await user.findOne({ email: req.body.email});
        console.dir(checkuser);
        
        //logique de hashage du mot de passe 
        const hashedPassword = await bcrypt.hash(req.body.password, 12)
        
        //hashage du mot de passe
        newUser.password = hashedPassword;
        console.dir(newUser);

        const addedUser = await newUser.save();
        res.json({addedUser})

    } catch (error) {
        res.json({message: error.message})
    }
    
    console.dir(res.headersSent) // true
  })

  module.exports = router; //exportation la route