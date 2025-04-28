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
