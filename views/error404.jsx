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
                <div>
                    <img src = "/images/cute404.jpeg" alt = "Pixar 404"/>
                
                <div>
                        Photo by: <a href="https://www.pixar.com/404"></a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

//export stub function
module.exports = error404