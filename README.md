# Project REST-Rant

### REST-Rant is an app where users can review restaurants.

* *As a customer, I need to be able to share my local restaurant experiences so that others will know if its worth trying out!* * 

#### Routes

| Method    | Path                    | Purpose                                        |
|:---------:|:-----------------------:|:----------------------------------------------:|
|  GET      |    /                    | Home Page                                      |
|  GET      |  /places                | Places index page                              |
|  POST     | /places                 | Places index page                              |
|  GET      | /places/new             | Form page for creating a new place             |
| GET       | /places/:id             | Details about a particular place               |
| PUT       | /places/:id             | Update a particular place                      |
| GET       | /places/:id/edit        | Form page for editing an existing place        |
| DELETE    | /places/:id             | Delete a particular place                      |
| POST      | /places/:id/rant        | Create a rant (comment)about a particular place|
| DELETE    | /places/:id/rant/:rantId| Delete a rant(comment) about a particular place|
| GET       |          *              | 404 page (matches any route not defined above) |


#### Restaurant Data

| Field     | Type          | 
|:---------:|:-------------:|
|  name     |   string      | 
|  city     |   string      | 
|  state    |   string      | 
|  cuisines |   string      | 
|  picture  |   string      | 
