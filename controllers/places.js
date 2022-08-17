const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'Twinkles BBQ',
        city: 'Raleigh',
        state: 'NC',
        cuisines: 'American BBQ',
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJa9yByWcmFHOTU-Fx1_fOtoD6rJ8JsiIrbw&usqp=CAU'
    }, {
        name: 'Je suis Yum',
        city: 'Durham',
        state: 'NC',
        cuisines: 'French',
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT01y3bj3fvUmUmplQQ2lh5Gd1xVVPfta6O6g&usqp=CAU'
    }]

    res.render('places/index', { places })
})

module.exports = router
