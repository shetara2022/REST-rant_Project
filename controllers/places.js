const router = require('express').Router()
const places = require('../models/places.js')


router.get('/', (req, res) => {
    // let places = [{
    //     name: 'Twinkles BBQ',
    //     city: 'Raleigh',
    //     state: 'NC',
    //     cuisines: 'American BBQ',
    //     pic: '/images/bbq.jpeg'      //exported to places.js
    // }, {
    //     name: 'Je suis Yum',
    //     city: 'Durham',
    //     state: 'NC',
    //     cuisines: 'French',
    //     pic: '/images/french.jpeg'
    // }]

    res.render('places/index', { places })
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.post('/', (req, res) => {
    console.log(req.body)
    // if (!req.body.pic) {
    //     // Default image if one is not provided
    //     req.body.pic = 'http://placekitten.com/400/400'
    // }
    // if (!req.body.city) {
    //     req.body.city = 'Anytown'
    // }
    // if (!req.body.state) {
    //     req.body.state = 'USA'
    // }
    // places.push(req.body)
    res.send('/places')
})


module.exports = router
