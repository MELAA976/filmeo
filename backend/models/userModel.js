const mongoose = require("mongoose");
const {Schema} = mongoose;
require('mongoose-type-email');

mongoose.SchemaTypes.Email.defaults.message = 'Address mail invalide'


const userSchema = new Schema(
    {
        nom: {
            type: String,
            require: [true, 'Le nom est obligatoire'],
            trim: true
        },

        prenom: {
            type: String,
            require: [true, 'Le nom est obligatoire'],
            trim: true
        },

        mail: {
            email: mongoose.SchemaTypes.Email
        },

        password: {
            type: String,
            require: [true, 'mot de passe obligatoire'],
            trim: true

        }
    }
)

module.exports = mongoose.model('User', userSchema)

