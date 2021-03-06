import {createAcyncAction} from 'Helpers/acyncAction'
import {ApiCall} from './api'

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const addProductAction = (product) => ({
    type: ADD_PRODUCT,
    product
})
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const deleteProductAction = (product) => ({
    type: DELETE_PRODUCT,
    product
})

export const INCREMENT_PRODUCT = 'INCREMENT_PRODUCT';
export const incrementProductAction = (product) => ({
    type: INCREMENT_PRODUCT,
    product
})


export const DECREMENT_PRODUCT = 'DECREMENT_PRODUCT';
export const decrementProductAction = (product) => ({
    type: DECREMENT_PRODUCT,
    product
})


export const GET_PRODUCT =createAcyncAction('GET_PRODUCT');
export const getProduct = () => {
    return ApiCall({
        types: GET_PRODUCT,
        endpoint: '/get-products'
    })
}

