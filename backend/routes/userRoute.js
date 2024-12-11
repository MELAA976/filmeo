const express = require("express");
const user = require('../models/userModel')
const router = express.Router();


// router.get('/', (req, res) => {
//     res.send('Bienvenue sur ma page')
// })

// création de route user
router.post('/', async function (req, res) {
    console.dir(res.headersSent) // false
    const newUser = new user(req.body)
    try { 
        const addedUser = await newUser.save();
        res.json({addedUser})

    } catch (error) {
        res.json({message: error.message})
    }
    
    
    console.dir(res.headersSent) // true
  })

  module.exports = router; //exportation la route