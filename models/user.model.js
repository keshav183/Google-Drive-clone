const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required :true,
        trim : true,
        lowercase : true,
        unique: true,
        minlength : [3,'username must be at least of 3 character']
    },
    email: {
        type : String,
        required :true,
        trim : true,
        lowercase : true,
        unique: true,
        minlength : [10,'username must be at least of 10 character']
    },
    password :{
        type : String,
        required :true,
        trim : true,
         minlength : [3,'username must be at least of 3 character']
    }
})

const user = mongoose.model('user' , userSchema)
module.exports = user;