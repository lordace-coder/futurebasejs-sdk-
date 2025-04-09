import { Credentials ,FutureResponse} from "./types/base";



class FutureBase {
  url: string;
  credentials: Credentials;

  constructor(credentials: Credentials) {
    {
      this.credentials = credentials;
      this.url = "http://127.0.0.1:8000/api/";
    }
  }

  public allCollections = async (): Promise<FutureResponse> => {
    try {
      const response = await fetch(
        `${this.url}/collections/${this.credentials.username}/${this.credentials.password}/${this.credentials.projectId}`
      );
      return {
        status: response.status === 200 ? "success" : "error",
        message:
          response.status === 200
            ? "Collections fetched successfully"
            : "Failed to fetch collections",
        data: await response.json(),
      };
    } catch (error) {
      return {
        status: "error",
        message: "An error occurred while fetching collections",
        error: error instanceof Error ? error.message : String(error),
      };
    }
    };
    
    public allDocuments = async (collectionId: string): Promise<FutureResponse> => {
        try {
            const res = await fetch(
              `${this.url}/collection-data/${this.credentials.username}/${this.credentials.password}/${collectionId}`
            );
            return {
                status: res.status === 200 ? "success" : "error",
                message:
                    res.status === 200
                        ? "Documents fetched successfully"
                        : "Failed to fetch documents",
                data: await res.json(),
            };
        } catch (error) {
            return {
                status: "error",
                message: "An error occurred while fetching documents",
                error: error instanceof Error ? error.message : String(error),
            }
        }
    }

  public insertDocument = async (collectionId: string, data: object): Promise<FutureResponse> => {
    try {
      const response = await fetch(
        `${this.url}/collection-actions/${this.credentials.username}/${this.credentials.password}/${collectionId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      return {
        status: response.status === 200 ? "success" : "error",
        message:
          response.status === 200
            ? "Document inserted successfully"
            : "Failed to insert document",
        data: await response.json(),
      };
    } catch (error) {
      return {
        status: "error",
        message: "An error occurred while inserting the document",
        error: error instanceof Error ? error.message : String(error),
      };
    }
  };

  public updateDocument = async (collectionId: string, data: object): Promise<FutureResponse> => {
    try {
      const response = await fetch(
        `${this.url}/collection-actions/${this.credentials.username}/${this.credentials.password}/${collectionId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      return {
        status: response.status === 200 ? "success" : "error",
        message:
          response.status === 200
            ? "Document updated successfully"
            : "Failed to update document",
        data: await response.json(),
      };
    } catch (error) {
      return {
        status: "error",
        message: "An error occurred while updating the document",
        error: error instanceof Error ? error.message : String(error),
      };
    }
  };

  public deleteDocument = async (collectionId: string, filter: object): Promise<FutureResponse> => {
    try {
      const response = await fetch(
        `${this.url}/collection-actions/${this.credentials.username}/${this.credentials.password}/${collectionId}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(filter),
        }
      );
      return {
        status: response.status === 200 ? "success" : "error",
        message:
          response.status === 200
            ? "Document deleted successfully"
            : "Failed to delete document",
        data: await response.json(),
      };
    } catch (error) {
      return {
        status: "error",
        message: "An error occurred while deleting the document",
        error: error instanceof Error ? error.message : String(error),
      };
    }
  };
}
export default FutureBase;