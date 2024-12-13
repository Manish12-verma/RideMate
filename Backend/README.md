# User Registration Endpoint Documentation

## Endpoint

**POST** `/users/register`

## Description

This endpoint allows new users to register by providing their first name, last name, email, and password.

## Request Body

The request body must be in JSON format and include the following fields:

- `fullname.firstname` (string, required): The first name of the user (minimum 3 characters).
- `fullname.lastname` (string, optional): The last name of the user (minimum 3 characters).
- `email` (string, required): The email address of the user (must be a valid email format).
- `password` (string, required): The password for the account (minimum 6 characters).

### Example Request Body

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

## Example Responses

### Successful Registration

**Status Code:** `201 Created`

**Response Body:**

```json
{
  "token": "your_jwt_token",
  "user": {
    "_id": "unique_user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

# User Login Endpoint Documentation

## Endpoint

**POST** `/users/login`

## Description

This endpoint allows existing users to log in by providing their email and password.

## Request Body

The request body must be in JSON format and include the following fields:

- `email` (string, required): The email address of the user.
- `password` (string, required): The password for the account (minimum 6 characters).

### Example Request Body

```json
{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```