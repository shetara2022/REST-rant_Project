require('dotenv').config()

//Initialize express app variable 
const express = require('express')
const app = express()

//Defines the JSX view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


app.use('/places', require('./controllers/places'))



//Create HomePage route
app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.status(404).render('error404')
})
app.listen(process.env.PORT)
