//Import React and Def functions 

const React = require('react')
const Def = require('./default')

//create 404 stub function
function error404() {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry. We can't find this page!</p>
            </main>
        </Def>
    )
}

//export stub function
module.exports = error404