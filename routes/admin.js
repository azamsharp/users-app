const express = require('express')
const router = express.Router()

// middleware 
router.use(function(req,res,next){
  console.log("middleware to authenticate the admin")
  next()
})

router.get('/',function(req,res){
  console.log('index for admin')
  res.render('index')
})

router.get('/user-list',function(req,res){
  res.render('userlist')
})

module.exports = router
