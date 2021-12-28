# Path Documentation

The documentation is for ringing the endpoints from outside the container.
You must be logged in to paths from number 2 to number 9 and to do this you must first register.

## 1 Register

METHOD POST

http://localhost/register/

Routes to register.
You must send in JSON:

- name,
- email, <-Must be unique

In response serv send new user

## 2 Login
METHOD POST

http://localhost/login/

Routes to log in .
In JSON you must send :
- email
- password

In answer serv set cookie witch JWT and send JSON "Login successful"

## 3 films

METHOD GET

http://localhost/films/page/:page?

Last element url is number of page and is optional, default is page number 1

In response server send JSON witch films from selected page


METHOD GET

http://localhost/films/title/:title

Last element url is title film and is required 

In response server send JSON witch found films


METHOD GET

http://localhost/films/id/:id

Last element url is film id and is required

In response server send JSON witch found film 


## 4 Species

METHOD GET

http://localhost/species/page/:page?

Last element url is number of page and is optional, default is page number 1

In response server send JSON witch species from selected page


METHOD GET

http://localhost/species/name/:name

Last element url is name species and is required

In response server send JSON witch found species


METHOD GET

http://localhost/species/id/:id

Last element url is species id and is required

In response server send JSON witch found specie 


## 5 Vehicles

METHOD GET

http://localhost/vehicles/page/:page?

Last element url is number of page and is optional, default is page number 1

In response server send JSON witch vehicles from selected page


METHOD GET

http://localhost/vehicles/name/:name

Last element url is name species and is required

In response server send JSON witch found vehicles


METHOD GET

http://localhost/vehicles/id/:id

Last element url is species id and is required

In response server send JSON witch found vehicle


## 6 Starships

METHOD GET

http://localhost/starships/page/:page?

Last element url is number of page and is optional, default is page number 1

In response server send JSON witch starships from selected page


METHOD GET

http://localhost/starships/name/:name

Last element url is name species and is required

In response server send JSON witch found starships


METHOD GET

http://localhost/starships/id/:id

Last element url is species id and is required

In response server send JSON witch found starship


## 7 Planets

METHOD GET

http://localhost/planets/page/:page?

Last element url is number of page and is optional, default is page number 1

In response server send JSON witch planets from selected page


METHOD GET

http://localhost/planets/name/:name

Last element url is name species and is required

In response server send JSON witch found planets


METHOD GET

http://localhost/planets/id/:id

Last element url is species id and is required

In response server send JSON witch found planet


## 8 Crawls

METHOD GET

http://localhost/crawls/words

In response server send JSON witch words and count  appearances in opening crawls of all films


METHOD GET

http://localhost/crawls/person

In response server send JSON (Array) witch  the most common in opening crawls. Only full names are taken into account