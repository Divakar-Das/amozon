import FetchApi from "./api";
export const GetRequest = async (url) => {
    const response = await FetchApi.get(url);
    return response.data;
}


export const PostRequest = async (url) => {
    const response = await FetchApi.post(url);
    return response.data;
}


export const PostRequest2 = async (url,data) => {
    const response = await FetchApi.post(url,data);
    return response.data;
}

export const PostRequest3 = async (url,data) => {
    const response = await FetchApi.post(url,data);
    return response;
}

