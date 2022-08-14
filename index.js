require('dotenv').config()
//Initialize express app variable 
const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

//Create HomePage route
app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page!</h1>')
})
app.listen(process.env.PORT)
