const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.methods.hashPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

userSchema.methods.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.password)
}

module.exports =  mongoose.model('User', userSchema)