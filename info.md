# FutureBase API Documentation

This document provides a detailed guide on how to use the FutureBase API. It includes information about the available endpoints, request formats, response structures, and examples.

---

## Base URL

The base URL for all API requests is:

```
http://<your-domain>/api/
```

---

## Authentication

All endpoints require authentication using the `email` and `password` parameters passed in the URL. Ensure that valid credentials are provided for successful API interaction.

---

## Endpoints

### 1. List Collections
**Endpoint:**  
`GET /collections/<str:email>/<str:password>/<int:project_id>`

**Description:**  
Fetches all collections for a specific project.

**Response Structure:**
```json
[
    {
        "id": 1,
        "name": "Collection Name",
        "description": "Description of the collection"
    },
    ...
]
```

---

### 2. Get Collection Data
**Endpoint:**  
`GET /collection-data/<str:email>/<str:password>/<int:id>`

**Description:**  
Fetches all data for a specific collection.

**Response Structure:**
```json
{
    "collection_data": [
        {
            "_id": "64f1b2c3d4e5f67890123456",
            "field1": "value1",
            "field2": "value2"
        },
        ...
    ]
}
```

---

### 3. Perform Actions on a Collection
**Endpoint:**  
`POST /collection-actions/<str:email>/<str:password>/<int:id>`  
`PATCH /collection-actions/<str:email>/<str:password>/<int:id>`  
`DELETE /collection-actions/<str:email>/<str:password>/<int:id>`

**Description:**  
Perform CRUD operations on a specific collection.

#### POST (Insert Data)
**Request Body:**
```json
{
    "field1": "value1",
    "field2": "value2"
}
```

**Response Structure:**
```json
{
    "_id": "64f1b2c3d4e5f67890123456",
    "field1": "value1",
    "field2": "value2"
}
```

#### PATCH (Update Data)
**Request Body:**
```json
{
    "id": "64f1b2c3d4e5f67890123456",
    "field1": "new_value"
}
```

**Response Structure:**
```json
{
    "_id": "64f1b2c3d4e5f67890123456",
    "field1": "new_value"
}
```

#### DELETE (Delete Data)
**Request Body:**
```json
{
    "id": "64f1b2c3d4e5f67890123456"
}
```

**Response Structure:**
```json
{
    "message": "Item deleted successfully"
}
```

---

## Error Responses

All error responses follow this structure:
```json
{
    "error": "Error message"
}
```

**Example:**
```json
{
    "error": "Invalid user"
}
```

---

## Notes

1. Ensure that the `email` and `password` parameters are valid for all requests.
2. The `_id` field in MongoDB is returned as a string for JSON serialization.
3. Use appropriate HTTP methods (`GET`, `POST`, `PATCH`, `DELETE`) for the desired operations.

---

## Example Usage

### Fetch Collections
```bash
curl -X GET "http://<your-domain>/api/collections/user@example.com/password123/1"
```

### Insert Data into a Collection
```bash
curl -X POST "http://<your-domain>/api/collection-actions/user@example.com/password123/1" \
-H "Content-Type: application/json" \
-d '{"field1": "value1", "field2": "value2"}'
```

### Update Data in a Collection
```bash
curl -X PATCH "http://<your-domain>/api/collection-actions/user@example.com/password123/1" \
-H "Content-Type: application/json" \
-d '{"id": "64f1b2c3d4e5f67890123456", "field1": "new_value"}'
```

### Delete Data from a Collection
```bash
curl -X DELETE "http://<your-domain>/api/collection-actions/user@example.com/password123/1" \
-H "Content-Type: application/json" \
-d '{"id": "64f1b2c3d4e5f67890123456"}'
```

---

For further assistance, contact the API support team.