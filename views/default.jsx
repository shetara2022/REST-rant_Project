//IMPORT REACT
const React = require('react')

//STUB FUNCTION WITH ONE PARAMETER -stub function is a function that can be called without error
//In def function include return statement that includes HTMl skeleton for page
function Def(html) { 
    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

//export def function
module.exports = Def