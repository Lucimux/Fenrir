var express = require('express')
var router = express.Router()
const jwt = require('jsonwebtoken')
const passport = require('passport')
const fs = require('fs')
const path = require('path')
const showdown = require('showdown')
const axios = require('axios')
/* GET home page. */

function truncateString(myString, limit) {
	const shortened = myString.indexOf(' ', limit);
	if (shortened == -1) return myString;
	return myString.substring(0, shortened);
  }

router.post('/register',(req, res, next) => {
	passport.authenticate('local.signup',(err, user, info) => {
		if (err || !user) {
			return res.status(400).json({
				message: info ? info.message : 'Ha ocurrido un error',                
				user: user				
			})
		}
		const token = jwt.sign(user.toJSON(), 'supersecret')
		res.status(200).json({token, expiresIn: 5600})
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
        return res.status(200).json({token, expiresIn: 5600})
		
	})(req, res, next)
})

router.get('/tema/:tema', (req,res) => {
	try{
		const tema = req.params.tema				
		let filePath = path.resolve('../server/markdownFiles')
		filePath = path.join(filePath, `${tema}.md`)
		const file = fs.readFileSync(filePath,'utf-8')				
		res.status(200).json({
			content: file
		})
	}catch(error){
		res.status(400).json({
			error: error.errno == -2 ? "Tema no encontrado" : "Ha ocurrido un error"
		})
	}
})

router.get('/news', (req,res) => {
		const searchTerm = 'cyber security'
		const sortby = 'relevance'
		const searchLimit = '20'						
		axios.get('https://www.reddit.com/search.json',{
			params: {
				q: searchTerm,
				sort: sortby,
				limit: searchLimit
			}
		})
		.then(response=> {
			res.json({data: response.data.data.children.map(post => ({
					preview: post.data.preview ? post.data.preview.images[0].source.url : 'https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg',
					cardTitle: post.data.title,
					cardText: truncateString(post.data.selftext, 50) ,
					url: post.data.url,
					subreddit: post.data.subreddit,
					score: post.data.score
				})				
			)})
		}).catch(err => console.log(err))		
	
})

module.exports = router;
