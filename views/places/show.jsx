const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <h3>Rating</h3>
                <h3>Description</h3>
                <h4>Add a Comment</h4>
                <p>No comments yet!</p>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                Edit
                </a>  
                <form method="POST" action={`/places/${data.place.id}?_method=DELETE` }> 
                <button type="submit" className="btn btn-danger">
                Delete
                </button>
                </form>     

            </main>
    </Def>
)

}

module.exports = show