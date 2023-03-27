# REST API - Users

This is a simple REST API for users. It is built using [Express](https://expressjs.com/).

## Usage

You can use this API to create, read, update, and delete users. You can also get a list of all users.

All endpoints return JSON.

## Endpoints

### GET /users

Returns a JSON array of all users. Each user has the following properties:

- `id` - The ID of the user
- `name` - The name of the user
- `created_at` - The date the user was created
- `updated_at` - The date the user was last updated

Example:

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "created_at": "2019-01-01T00:00:00.000Z",
    "updated_at": "2019-01-01T00:00:00.000Z"
  },
  {
    "id": 2,
    "name": "Jane Doe",
    "created_at": "2019-01-01T00:00:00.000Z",
    "updated_at": "2019-01-01T00:00:00.000Z"
  }
]
```

### GET /users/:name

Returns a JSON object with the following properties:

- `id` - The ID of the user
- `name` - The name of the user
- `created_at` - The date the user was created
- `updated_at` - The date the user was last updated

Example:

```json
{
  "id": 1,
  "name": "John Doe",
  "created_at": "2019-01-01T00:00:00.000Z",
  "updated_at": "2019-01-01T00:00:00.000Z"
}
```

### POST /users

Creates a new user. The request body should be a JSON object with the following properties:

- `name` - The name of the user

### PUT /users/:name

Updates the user with the given name. The request body should be a JSON object with the following properties:

- `name` - The new name of the user

### DELETE /users/:name

Deletes the user with the given name.

## Running the API

To run the API, first install the dependencies:

```bash
npm install
```

Then, start the server:

```bash
npm start
```

The server will be running on port 3000.
