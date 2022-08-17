
const React = require('react')
const Def = require('../default')


//Create a 'index' stub function then export it
//Then, use def component from default.jsx as a wrapper for stub home page code
function index(data) { 
    let placesFormatted = data.places.map((place) => {
        return (
            <div>
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name}/>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>PLACES</h1>
                {placesFormatted}
            </main>
</Def>
    )
}

module.exports = index