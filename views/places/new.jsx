//Import React and Def component from default.jsx
const React = require('react')
const Def = require('../default')

function new_form() { 
    return (
        <Def>
            <html>
                <main>
                    <h1>Add a New Place</h1>
                    <form method="POST" action="/places">
                        <div className="form-group">
                            <label htmlFor="name">Place Name</label>
                            <input className="form-control" id ="name" name="name" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pic">Place Image</label>
                            <input className="form-control" type ="url" id="pic" name ="pic" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input className="form-control" id ="city" name="city" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="state">State</label>
                            <input className="form-control" id ="state" name="state" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cuisines">Cuisines</label>
                            <input className="form-control" id ="cuisines" name="cuisines" required/>
                        </div>
                        <input className="btn btn-primary" type = "submit" value="Add Place" />
                    </form>
                </main>
            </html>
        </Def>
    )
}


module.exports = new_form