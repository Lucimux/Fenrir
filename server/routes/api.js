var express = require('express')
var router = express.Router()
const jwt = require('jsonwebtoken')
const passport = require('passport')
const fs = require('fs')
const path = require('path')
const showdown = require('showdown')
/* GET home page. */

router.post('/register',(req, res, next) => {
	passport.authenticate('local.signup',(err, user, info) => {
		console.log(err,user,info)
		if (err || !user) {
			return res.status(400).json({
				message: info ? info.message : 'Ha ocurrido un error',                
				user: user				
			})
		}
		const token = jwt.sign(user.toJSON(), 'supersecret')
		res.status(200).json({user, token})
	})(req, res, next)
})

router.post('/login',(req, res, next) => {
	passport.authenticate('local.signin',(err, user, info) => {
		if (err || !user) {
            return res.status(400).json({
                message: info ? info.message : 'Ha ocurrido un error',
                user   : user
            });
        }        
        const token = jwt.sign(user.toJSON(), 'supersecret')
        return res.status(200).json({user, token})
		
	})(req, res, next)
})

router.get('/tema/:tema', (req,res) => {
	try{
		const tema = req.params.tema				
		let filePath = path.resolve('../server/markdownFiles')
		filePath = path.join(filePath, `${tema}.md`)
		const file = fs.readFileSync(filePath,'utf-8')				
		// const markDownConverter = new showdown.Converter()
		// markDownConverter.setOption('noHeaderId',false)
		// const htmlContent = markDownConverter.makeHtml(file)
		res.status(200).json({
			content: file
		})
	}catch(error){
		res.status(400).json({
			error: error.errno == -2 ? "Tema no encontrado" : "Ha ocurrido un error"
		})
	}
})

module.exports = router;
