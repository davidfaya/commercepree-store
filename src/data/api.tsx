import axios, { AxiosInstance } from "axios";

let apiToken : string | ( null | undefined )= '';
let client: AxiosInstance;
const apiUrl : string | undefined = "http://localhost:1234"   //process.env.REACT_APP_API_ENDPOINT; //


export const init = (moreHeaders?:any) => {
    //debugger
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

export const getProductList = () => {
    return init().get(`/products`);
};

export const getProductOptions = (options:ProductsFilterOptions) => {
    const {page, size, categories} = options
    const categoryQuery = `&category=${categories ? categories.join(`&category=`) : ''}`
    return init().get(`/products?page${page || ''}&size=${size || ''}${categoryQuery}`)
}

export const updateAddProduct = (data:any) => {
    return init().post("/product", data);
};

export const deleteProduct = (id:any) => {
    return init().post(`/product/${id}`);
};
