const express = require('express')
const app = express()
const session = require('express-session');
const bodyParser = require('body-parser')
const path = require('path')
const flash = require('connect-flash');
const router = require('./routes/index')


app.use(flash());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(session({ 
    secret:'un-secret', 
    saveUninitialized: true, 
    resave: true
  })); 

app.set('views', path.join(__dirname, 'views')); // Set View directory for SCSS/CSS
app.use(express.static(path.join(__dirname, 'public')));//Set a Public directory for PUG
app.set('view engine','pug')

app.get('/',router)


module.exports = {
    app,
    express
}

