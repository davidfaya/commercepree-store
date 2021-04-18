import axios, { AxiosInstance } from "axios";

let apiToken : string | ( null | undefined )= '';
let client: AxiosInstance;
const apiUrl : string | undefined = "http://localhost:1234"//process.env.REACT_ATT_API_ENDPOINT;


export const init = (moreHeaders?:any) => {
    apiToken = window.localStorage.getItem('ShopSpreeApiToken');

    let headers = {
    ...moreHeaders,
    Accept: "application/json",
    Authorization: "",
    };

    if (apiToken) {
        headers.Authorization = `Bearer ${apiToken}`;
    }
    client = axios.create({
        baseURL: apiUrl,
        timeout: 31000,
        headers: headers,
    });
    return client;
};

export const getProductList = (params?:any) => {
    return init().get("/products", { params: params });
};

export const updateAddProduct = (data:any) => {
    return init().post("/product", data);
};

export const deleteProduct = (id:any) => {
    return init().post(`/product/${id}`);
};
