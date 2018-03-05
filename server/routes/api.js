var express = require('express')
var router = express.Router()
const jwt = require('jsonwebtoken')
const passport = require('passport')
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
        return res.json({user, token})
		
	})(req, res, next)
})

router.get('/', function(req, res, next) {
  res.json([{
  	id: 1,
  	username: "samsepi0l"
  }, {
  	id: 2,
  	username: "D0loresH4ze"
  }]);
});

module.exports = router;
