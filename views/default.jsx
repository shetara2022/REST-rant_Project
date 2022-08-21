//IMPORT REACT
const React = require('react')

//STUB FUNCTION WITH ONE PARAMETER -stub function is a function that can be called without error
//In def function include return statement that includes HTMl skeleton for page
function Def(html) { 
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" />
                <link rel = "stylesheet" href ="/css/styles.css"/>
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href ="/">HOME</a>
                        </li>
                        <li>
                        <a href ="/places">Places</a>
                        </li>
                        <li>
                        <a href ="/places/new">Add Place</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </body>
        </html>
    )
}

//export def function
module.exports = Def