const mongoose = require("mongoose");
const {Schema} = mongoose;
require('mongoose-type-email');
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

mongoose.SchemaTypes.Email.defaults.message = 'Address mail invalide'


const userSchema = new Schema(
    {
        nom: {
            type: String,
            required: [true, 'Le nom est obligatoire'],
            trim: true, //supprime les espaces unitiles
            minlength : [2, 'Le nom doit contenir au moins 2 caractères '],
            minlength : [50, 'Le nom ne peut pas dépasser 50 caractères '],

        },

        prenom: {
            type: String,
            required: [true, 'Le nom est obligatoire'],
            trim: true, //supprime les espaces unitiles
            minlength : [2, 'Le prenom doit contenir au moins 2 caractères '],
            minlength : [50, 'Le prenom ne peut pas dépasser 50 caractères '],

        },

        mail: {
            type: mongoose.SchemaTypes.Email,  
            required: [true, 'L\'adresse email est obligatoire'],  // Ajout de required
            unique: true,
            lowercase: true,
        },

        role: {
            type: Array,
        },
        
        password: {
            type: String,
            required: [true, 'mot de passe obligatoire'],
            trim: true,
            minlength: [6, 'Le mot de passe doit contenir au moins 6 caractères']  // Ajout sécurité

        },
        dateCreation: {
            type: Date,
            default: Date.now,
            immutable: true // Empêche toute modification après création
        }
    }
)

//ajout d'index sur quelque élements
userSchema.index({ mail:1, nom:1, age:-1, });

  

module.exports = mongoose.model('User', userSchema)

