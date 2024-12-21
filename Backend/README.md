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

# User Profile Endpoint Documentation

## Endpoint

**GET** `/users/profile`

## Description

Retrieves the profile information of the currently authenticated user.

## Authentication

This endpoint requires a valid JWT token to be included in the `Authorization` header as a Bearer token.

## Example Request

## Example Response

**Status Code:** `200 OK`

**Response Body:**

```json
{
  "_id": "unique_user_id",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

### Error Response

**Status Code:** `401 Unauthorized`

**Response Body:**

```json
{
  "message": "Access denied. No token provided."
}
```

# User Logout Endpoint Documentation

## Endpoint

**GET** `/users/logout`

## Description

Logs out the currently authenticated user by invalidating their session.

## Authentication

This endpoint requires a valid JWT token to be included in the `Authorization` header as a Bearer token.


## Example Response

**Status Code:** `200 OK`

**Response Body:**

```json
{
  "message": "User logged out successfully"
}
```
# Captain Registration Endpoint Documentation

## Endpoint

**POST** `/captains/register`

## Description

This endpoint allows new captains to register by providing their first name, last name, email, password, and vehicle details.

## Request Body

The request body must be in JSON format and include the following fields:

- `fullname.firstname` (string, required): The first name of the captain (minimum 3 characters).
- `fullname.lastname` (string, required): The last name of the captain (minimum 3 characters).
- `email` (string, required): The email address of the captain (must be a valid email format).
- `password` (string, required): The password for the account (minimum 6 characters).
- `vehicle.color` (string, required): The color of the vehicle (minimum 3 characters).
- `vehicle.plate` (string, required): The plate number of the vehicle (minimum 3 characters).
- `vehicle.capacity` (integer, required): The capacity of the vehicle (minimum 1).
- `vehicle.vehicleType` (string, required): The type of the vehicle (must be one of 'car', 'motorcycle', 'auto').

### Example Request Body

```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "yourpassword",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```
### Example Response Body

**Status Code:** `200 Created`

**Response Body:**

```json
{
  "captain": {
    "_id": "unique_captain_id",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

---

# Captain Login Endpoint Documentation

## Endpoint

**POST** `/captains/login`

## Description

This endpoint allows existing captains to log in by providing their email and password.

## Request Body

The request body must be in JSON format and include the following fields:

- `email` (string, required): The email address of the captain.
- `password` (string, required): The password for the account (minimum 6 characters).

### Example Request Body

```json
{
  "email": "jane.doe@example.com",
  "password": "yourpassword"
}

---

# Captain Logout Endpoint Documentation

## Endpoint

**GET** `/captains/logout`

## Description

Logs out the currently authenticated captain by invalidating their session.

## Authentication

This endpoint requires a valid JWT token to be included in the `Authorization` header as a Bearer token.

## Example Request

```
GET /captains/logout
Authorization: Bearer your_jwt_token

---

# Captain Profile Endpoint Documentation

## Endpoint

**GET** `/captains/profile`

## Description

Retrieves the profile information of the currently authenticated captain.

## Authentication

This endpoint requires a valid JWT token to be included in the `Authorization` header as a Bearer token.


## Example Response

**Status Code:** `200 OK`

**Response Body:**

```json
{
  "captain": {
    "_id": "unique_captain_id",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}



