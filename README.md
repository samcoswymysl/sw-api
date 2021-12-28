# Path Documentation

The documentation is for ringing the endpoints from outside the container.

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

http://localhost:/films/page/:page?

Last element url is number of page and is optional, default is page number 1


METHOD GET

http://localhost:/films/title/:title


