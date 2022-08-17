//Import React and the Def function from default.jsx

const React = require('react')
const Def = require('./default')

//Create a 'home' stub function then export it
//Then, use def component from default.jsx as a wrapper for stub home page code
function home() { 
    return (
        <Def>
            <main>
                <h1>HOME</h1>
            </main>
</Def>
    )
}

module.exports = home