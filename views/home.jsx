//Import React and the Def function from default.jsx

const React = require('react')
const Def = require('./default')

//Create a 'home' stub function then export it
//Then, use def component from default.jsx as a wrapper for stub home page code
function home() { 
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div>
                    <img src = "/images/pizza.jpg" alt = "Pizza"/>
                
                <div>
                        Photo by: <a href="AUTHOR_LINK">Chad Montano</a> on <a href="https://unsplash.com/photos/MqT0asuoIcU">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
  <button className="btn-primary">Places Page</button>
</a>

            </main>
</Def>
    )
}

module.exports = home