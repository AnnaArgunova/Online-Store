import { ADD_PRODUCT, DELETE_PRODUCT, INCREMENT_PRODUCT, DECREMENT_PRODUCT } from '../Action/products';
import { createReducer } from 'Helpers/reducer'

const initialState = {
    bagsItem: [],
    totalSum: 0,
    

}

const bag = {
    [ADD_PRODUCT]: (state = initialState, action) => {
        return {
            ...state,
            bagsItem: [...state.bagsItem, action.product],
            totalSum: state.totalSum + (action.product.count * action.product.price),
            
        }
    },
    [DELETE_PRODUCT]: (state = initialState, action) => {
        return {
            ...state,
            totalSum: state.totalSum - (action.product.count * action.product.price),
            bagsItem: state.bagsItem.filter((i) => {
                return i.id !== action.product.id
            }),

        }


    },

    [INCREMENT_PRODUCT]: (state = initialState, action) => {
        console.log(action.product);

        return {
            ...state,
            bagsItem: state.bagsItem.map(el => {

                if (el.id === action.product.id) el.count += 1
                return el
            }),
            totalSum: state.bagsItem.reduce((acc, curr) => acc += curr.count * curr.price, 0)

        }
    },
    [DECREMENT_PRODUCT]: (state = initialState, action) => {

        return {
            ...state,
            bagsItem: state.bagsItem.map(el => {
                console.log(el.id);

                if (el.id === action.product.id && el.count) el.count -= 1

                return el
            }),
            totalSum: state.bagsItem.reduce((acc, curr) => acc += curr.count * curr.price, 0)

        }
    }



}

export default createReducer(initialState, bag)