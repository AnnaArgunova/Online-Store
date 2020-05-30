import { ADD_PRODUCT, DELETE_PRODUCT } from '../Action/products';
import { createReducer } from 'Helpers/reducer';
const initialState = {
    catalog: [
        {
            id: 1,
            title: 'Креветка',
            price: 60,
            image: 'images/shrimpYellowNeon-300x400.jpg',
            count: 0


        },
        {
            id: 2,
            title: 'Улитка',
            price: 60,
            image: 'images/snailYellowAmpoule1.jpg',
            count: 0

        },
        {
            id: 3,
            title: 'Креветка',
            price: 60,
            image: 'images/srimpGreenBabaulti-300x400.jpg',
            count: 0

        },
        {
            id: 4,
            title: 'Креветка',
            price: 60,
            image: 'images/shrimpYellowNeon-300x400.jpg',
            count: 0

        },
        {
            id: 5,
            title: 'Улитка',
            price: 60,
            image: 'images/snailYellowAmpoule1.jpg',
            count: 0

        },
        {
            id: 6,
            title: 'Креветка',
            price: 60,
            image: 'images/srimpGreenBabaulti-300x400.jpg',
            count: 0
        }
    ],
    addedProduct: null,

}

const products = {
    [ADD_PRODUCT]: (state = initialState, action) => {

        return {
            ...state,
            addedProduct: state.catalog.map(el => {
                if (el.id === action.product.id) {
                    return action.product
                }

            })

        }
    },
    [DELETE_PRODUCT]: (state = initialState, action) => {

        return {
            ...state,
            addedProduct: state.catalog.map(el => {
                if (el.id === action.product.id) {
                    return action.product
                }

            })
        }
    },

}



export default createReducer(initialState, products)
