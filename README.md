# TeamD-Backend

RESTful endpoints


Register User
POST /user/register

default role value = "User"

Request Header 
not needed

```
Response (200) 

    {
        "access_token": "<access token>",
    }   
```
```
Response (400 - Bad Request) 

    {
        "msg": "<returned error message>"
    }
```

User Login

POST /user/login

Request Header 
not needed
```
Request Body 
[
    {
	"email":"<asset email>",
	"password":"<asset password>",
    }
]
```
```
Response (200)

    {
        "access_token": "<asset access_token>"
    }
```
```
Response (400 - Bad Request)
    {
        "message": "<returned error message>"
    }
```

Get all Users
GET /user/

Request Header
"<asset access_token>"

Request Body
"not needed"

```
Response (200)
    
    {
        "id": "<asset id>",
        "fullname": "<asset fullname>",
        "email": "<asset email>",
        "role": "<asset role>",
        "password": "<asset password>",
        "image": "<asset image>",
        "createdAt": "<asset createdAt>",
        "updatedAt": "<asset updatedAt>"
    }
    {
        "id": "<asset id>",
        "fullname": "<asset fullname>",
        "email": "<asset email>",
        "role": "<asset role>",
        "password": "<asset password>",
        "image": "<asset image>",
        "createdAt": "<asset createdAt>",
        "updatedAt": "<asset updatedAt>"
    }
```
```
Response (400 - Bad Request)
    {
        "msg": "Token not found"
    }
```
```
Response (403 - Forbidden) 
    {
        "msg": "Access Denied"
    }
```
Add Movie

POST /movie/add

Request headers
"<asset access_token>"
```
Status (200)
    {
        "id": 13,
        "title": "<asset title>",
        "synopsis": "<asset synopsis> ,
        "trailer": "<asset trailer>",
        "poster": "<asset poster>",
        "category": "<asset category>",
        "release_date": "<asset release_date>",
        "director": "<asset director>",
        "featured_song": "<asset featured_song>",
        "budget": "<asset budget>",
        "updatedAt": ""<asset updatedAt>"",
        "createdAt": ""<asset createdAt>""
    }
```
```
Error (409 - conflict)

    {
        "msg": "Title already exist, try another title."
    }
```


Get All Movies 
    GET /movies/

    Headers
    not needed

    Body
    Not needed
```
    Status (200)[
    {
        "id": "<asset id>",
        "title": "<asset title>",
        "synopsis": "<asset synopsis>",
        "trailer": "<asset trailer>",
        "poster": "<asset poster>",
        "category": "<asset category>",
        "release_date": "<asset release_date>",
        "director": "<asset director>",
        "featured_song": "<asset featured_song>",
        "budget": "<asset budget>",
    },
    {
        "id": "<asset id>",
        "title": "<asset title>",
        "synopsis": "<asset synopsis>",
        "trailer": "<asset trailer>",
        "poster": "<asset poster>",
        "category": "<asset category>",
        "release_date": "<asset release_date>",
        "director": "<asset director>",
        "featured_song": "<asset featured_song>",
        "budget": "<asset budget>",
    }
```

Get Movie by ID

GET /movie/:id

Headers
"not needed"

Body
"Not needed"

Parameter
"Needed"

```
Status (200)

    {
        "id": "<asset id>",
        "title": "<asset title>",
        "synopsis": "<asset synopsis>",
        "trailer": "<asset trailer>",
        "poster": "<asset poster>",
        "category": "<asset category>",
        "release_date": "<asset release_date>",
        "director": "<asset director>",
        "featured_song": "<asset featured_song>",
        "budget": "<asset budget>",
    }
```

```
Status (404)
    {
        msg : Not Found
    }
```