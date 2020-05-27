import { ADD_PRODUCT, DELETE_PRODUCT, INCREMENT_PRODUCT } from '../Action/products';
import {createReducer} from 'Helpers/reducer'

const initialState = {
    bagsItem:[],
    totalSum:0

}

const bag = {
    [ADD_PRODUCT]: (state = initialState, action) => {
        console.log("action>>>>", action)
        return {
            ...state,
            bagsItem: [...state.bagsItem, action.product],
        }
    },
    [DELETE_PRODUCT]: (state = initialState, action) => {
        console.log("action>>>>", action)
        
        return {
            ...state,
            bagsItem: state.bagsItem.filter(i => i.id !== action.id)
        }
        
    },
    [INCREMENT_PRODUCT]:(state = initialState,action)=>{
        console.log(action);
        
        return{
            ...state,
            count: state.action.product.count +1,
            totalSum: 25
        }
    }
  
}

export default createReducer(initialState, bag)