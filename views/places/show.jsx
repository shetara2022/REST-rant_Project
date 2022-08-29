const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>
                <div className="row">
                    <div className='col-sm-6'>
                        <img src={data.place.pic} alt={data.place.name} />
                        <h3>
                            Located in {data.place.city}, {data.city.state}
                        </h3> 
                    </div>
                    <div className='col-sm-6'>

                   
                <h1>{data.place.name}</h1>
                <h2>Rating</h2>
                <h2>Description</h2>
                <h3>{data.place.showEstablished()}</h3>
                <h4>Serving {data.place.cuisines}</h4>
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
                 </div>
                </div>        

            </main>
    </Def>
)

}

module.exports = show