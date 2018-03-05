const localStrategy = require('passport-local').Strategy
const passport = require('passport')
const User = require('../models/users')


passport.use('local.signup',new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false
},(email, password, done) => {
    User.findOne({'email':email})
    .then( (user) => {
        if(user){
            return done(null, false, { message : "El email ya esta registrado"})
        }
        const newUser = new User({
            email: email
        })        

        newUser.password = newUser.hashPassword(password)
        newUser.save((err) => err ? done(null, false, { message : "Ha ocurrido un error"}) : done(null,newUser))

    }).catch( (err) => done(err) )
}))


passport.use('local.signin',new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false
},(email, password, done) => {
    User.findOne({'email': email})
    .then( (user) => {
        if(!user){
            return done(null, false, { message : "Email o password incorrectos"})
        }
        if(!user.validatePassword(password)) {
            return done(null, false, { message : "Email o password incorrectos"})
        }
        return done(null, user)
        
    }).catch( (err) => done(err) )
}))

