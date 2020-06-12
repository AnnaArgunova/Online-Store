import { ADD_PRODUCT, DELETE_PRODUCT, GET_PRODUCT } from '../Action/products';
import { createReducer } from 'Helpers/reducer';
const initialState = {
    catalog: [],
    addedProduct: null,
    error: null,
    isLoader:false
}

const products = {
    [ADD_PRODUCT]: (state = initialState, action) => {

        return {
            ...state,
            addedProduct: state.catalog.map(el => {
                if (el.id === action.product.id) {
                    return action.product
                }

            }),

        }
    },
    [DELETE_PRODUCT]: (state = initialState, action) => {

        return {
            ...state,
            addedProduct: state.catalog.map(el => {
                if (el.id === action.product.id) {
                    return action.product
                }

            }),

        }
    },
   
     [GET_PRODUCT.SUCCESS]: (state = initialState, data) => {
console.log(data);

        return {
            ...state,
        catalog:data.products,
            error: null
        }
    },
    [GET_PRODUCT.FAILURE]: (state = initialState, { error }) => {
        console.log('error>>>>>');

        return {
            ...state,
            error
        }
    },
    [GET_PRODUCT.REQUEST]: (state = initialState)=>{
        console.log('request');

return{
    ...state,
    isLoader:true
}
    }

 }



export default createReducer(initialState, products)
