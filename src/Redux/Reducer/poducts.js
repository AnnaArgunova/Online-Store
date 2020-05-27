import {ADD_PRODUCT, DELETE_PRODUCT} from '../Action/products';
import {createReducer} from 'Helpers/reducer';
const initialState = {
    catalog: [
        {
            id: 1,
            title: 'Креветка',
            price: 60,
            image: 'images/shrimpYellowNeon-300x400.jpg',
            count:1


        },
        {
            id: 2,
            title: 'Улитка',
            price: 60,
            image: 'images/snailYellowAmpoule1.jpg',
            count:1

        },
        {
            id: 3,
            title: 'Креветка',
            price: 60,
            image: 'images/srimpGreenBabaulti-300x400.jpg',
            count:1

        },
        {
            id: 4,
            title: 'Креветка',
            price: 60,
            image: 'images/shrimpYellowNeon-300x400.jpg',
            count:1

        },
        {
            id: 5,
            title: 'Улитка',
            price: 60,
            image: 'images/snailYellowAmpoule1.jpg',
            count:1

        },
        {
            id: 6,
            title: 'Креветка',
            price: 60,
            image: 'images/srimpGreenBabaulti-300x400.jpg',
            count:1
        }
    ],
    addedProduct:null,

}

const products = {
   [ADD_PRODUCT]: (state = initialState, action) => {
     
    return{
        ...state,
        //addedProduct: action.product,
    
    }
},
[DELETE_PRODUCT]: (state = initialState, action) => {
    return{
        ...state,
        catalog: action.catalog.map(el => {
            if (el.id === action.el.id) {
                return action.el
            }
            return el
        })
    }      
    }
}
     
        
    
    export default createReducer(initialState, products)
