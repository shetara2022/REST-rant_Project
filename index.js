//Initialize express app variable 
const express = require('express')
const app = express()

//Create HomePage route
app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.listen(3000)
