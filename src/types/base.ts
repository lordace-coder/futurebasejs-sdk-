interface Credentials{
    username: string;
    password: string;
    projectId: string;
}

interface FutureResponse{
    status: string;
    message: string;
    data?: any;
    error?: string;
}


export {  Credentials,FutureResponse };