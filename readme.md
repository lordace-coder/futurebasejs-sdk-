# FutureBaseJS SDK

The `FutureBaseJS` SDK provides a simple interface to interact with the FutureBase API for managing collections and documents.

## Installation

Install the package using npm:

```bash
npm install futurebasejs
```

## Usage

Import and initialize the `FutureBase` class with your credentials:

```typescript
import FutureBase from "futurebasejs";

const futureBase = new FutureBase({
  username: "your-username",
  password: "your-password",
  projectId: "your-project-id",
});
```

## Methods

### `allCollections()`

Fetch all collections for the authenticated user.

```typescript
const response = await futureBase.allCollections();
console.log(response);
```

### `allDocuments(collectionId: string)`

Fetch all documents from a specific collection.

```typescript
const response = await futureBase.allDocuments("collection-id");
console.log(response);
```

### `insertDocument(collectionId: string, data: object)`

Insert a new document into a collection.

```typescript
const response = await futureBase.insertDocument("collection-id", { key: "value" });
console.log(response);
```

### `updateDocument(collectionId: string, data: object)`

Update an existing document in a collection.

```typescript
const response = await futureBase.updateDocument("collection-id", { key: "new-value" });
console.log(response);
```

### `deleteDocument(collectionId: string, filter: object)`

Delete a document from a collection based on a filter.

```typescript
const response = await futureBase.deleteDocument("collection-id", { key: "value" });
console.log(response);
```

## Response Format

All methods return a `FutureResponse` object:

```typescript
interface FutureResponse {
  status: "success" | "error";
  message: string;
  data?: any;
  error?: string;
}
```

## License

This project is licensed under the MIT License.
