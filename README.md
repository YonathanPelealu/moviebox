# TeamD-Backend

```
**RESTful endpoints**
**POST /user/register**

register user
default role value = "User"


Request Header 
not needed

Response (200) [
    {
        "access_token": "<access token>",
    }   
]

Response (400 - Bad Request) [
    {
        "msg": "<returned error message>"
    }
]

**POST /user/login**
user login

Request Header (not needed)
Request Body
{
	"email":"<asset email>",
	"password":"<asset password>",
}

Response (200)[
    {
        "access_token": "<asset access_token>"
    }
]
Response (400 - Bad Request)[
    {
        "message": "<returned error message>"
    }
]

**GET /user/**
Get all Users


Request Header
"<asset access_token>"

Request Body
not needed

Response (200) [
    [
        {
            "id": "<asset id>",
            "fullname": "<asset fullname>",
            "email": "<asset email>",
            "role": "<asset role>",
            "password": "<asset password>",
            "image": "<asset image>",
            "createdAt": "<asset createdAt>",
            "updatedAt": "<asset updatedAt>"
        },
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
    )
]

Response (400 - Bad Request) [
    {
        "msg": "Token not found"
    }
]

Response (403 - Forbidden) [
    {
        "msg": "Access Denied"
    }
]
Get User By Id

Request Header
not needed

GET /user/id/:id
```
