import React from 'react'
import {init, getProductList} from '../data/api'
import { INIT_PRODUCTS,ADD_PRODUCT } from '../types/const'


const apiClient = init()

const initialState: AppState = {
    products: [] 
}

export const AppContext: React.Context<AppContextModel> = React.createContext(
    {
        state: initialState,
        dispatch: null,
    }
);

export const loadProducts =  (state: AppState, action: any):AppState => {
    
    getProductList('').then((response) => {
        console.log(response);
        state.products = response.data.products
    }).catch((err) => {console.log(err)})
    
    return state
}

export const loadProductsParams =  (state: AppState, payload: any):AppState => {
    
    getProductList(payload).then((response) => {
        console.log(response);
        state.products = response.data.products
    }).catch((err) => {console.log(err)})
    
    return state
}

export function ProductReducer(state: AppState, action: any): AppState {
    switch (action.type) {
        case INIT_PRODUCTS:
            return loadProducts(state, action);
        case ADD_PRODUCT:
            return state;
        default:
        return state;
    }
}




