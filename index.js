//Modules and Globals
require('dotenv').config()

//Initialize express app variable 
const express = require('express')
const methodOverride = require('method-override')
const app = express()

//Defines the JSX view engine. These are the Express Settings 
//app.set('views', _dirname + '/views)
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//Controllers & Routes
app.use('/places', require('./controllers/places'))

//HomePage route
app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

//Listen for connections 
app.listen(process.env.PORT)


// res.status(404).render('error404')