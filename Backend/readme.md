# Backend API Documentation

# /users/register Endpoint Documentation

## Description
This endpoint is used for registering a new user. It creates a new user in the system and returns a JSON Web Token (JWT) along with the newly created user's data.

## HTTP Request
**POST** `/users/register`

## Request Body Data Requirements
- **email**: string (must be a valid email format). Minimum length is 5 characters.
- **fullname**:
  - **firstname**: string (required, minimum 3 characters).
  - **lastname**: string (optional, minimum 3 characters if provided).
- **password**: string (required, minimum 6 characters).

## Successful Response
- **Status Code**: 201 Created
- **Response**:
  - `token`: JSON Web Token for authentication.
  - `user`: Object containing the newly created user's data.

## Error Responses
- **Status Code**: 400 Bad Request
- **Response**: JSON object with error details when validation fails.

### Example Request
```http
POST /users/register
Content-Type: application/json

{
  "email": "john@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "password": "password123"
}
```

### Example Response
```json
{
  "token": "<jwt-token>",
  "user": {
    "_id": "unique_user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com"
  }
}
```

## /users/login Endpoint Documentation

### Description
This endpoint is used for user login. It verifies the user's credentials and returns a JSON Web Token (JWT) along with the user's data upon successful authentication.

### HTTP Request
**POST** `/users/login`

### Request Body Data Requirements
- **email**: string (must be a valid email format).
- **password**: string (required, minimum 6 characters).

### Successful Response
- **Status Code**: 200 OK
- **Response**:
  - `token`: JSON Web Token for authentication.
  - `user`: Object containing the user's data.

### Error Responses
- **Status Code**: 400 Bad Request or 401 Unauthorized
- **Response**: JSON object with error details when validation fails or the credentials are invalid.

### Example Request
```http
POST /users/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### Example Response
```json
{
  "token": "<jwt-token>",
  "user": {
    "_id": "unique_user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com"
  }
}
