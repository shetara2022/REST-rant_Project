const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'Twinkles BBQ',
        city: 'Raleigh',
        state: 'NC',
        cuisines: 'American BBQ',
        pic: '/images/bbq.jpeg'
    }, {
        name: 'Je suis Yum',
        city: 'Durham',
        state: 'NC',
        cuisines: 'French',
        pic: '/images/french.jpeg'
    }]

    res.render('places/index', { places })
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

module.exports = router
