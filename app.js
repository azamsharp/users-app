// npm install express --save
const express = require('express')
// npm install mustache-express --save
const mustache = require('mustache-express')

const User = require('./user.js')
const adminRouter = require('./routes/admin')

// npm install morgan --save
const morgan = require('morgan')

const app = express()

// setup view engine
app.engine('mustache',mustache())
app.set('view engine','mustache')
app.set('views',['./views','./views/admin'])

// setting up the morgan logger middleware
app.use(morgan('combined'))

app.use('/admin',adminRouter)



app.use('/',function(req,res,next){

  var date = new Date()
  res.header("Request-Date",date)
  res.header("MESSAGE","I AM AWESOME")

  console.log("MIDDLEWARE EXECUTED")
  next()

})

app.get('/',function(req,res){

  var user = User.find('landry')
  res.send(user)
})

app.get('/list',function(req,res){
  res.send(User.all)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
