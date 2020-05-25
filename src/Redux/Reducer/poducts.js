import { SELECT_PRODUCT } from '../Action/products'

const initialState = {
    catalog: [
        {
            id: 1,
            title: 'Креветка',
            price: 60,
            image: 'images/shrimpYellowNeon-300x400.jpg'

        },
        {
            id: 2,
            title: 'Улитка',
            price: 60,
            image: 'images/snailYellowAmpoule1.jpg'
        },
        {
            id: 3,
            title: 'Креветка',
            price: 60,
            image: 'images/srimpGreenBabaulti-300x400.jpg'
        },
        {
            id: 4,
            title: 'Креветка',
            price: 60,
            image: 'images/shrimpYellowNeon-300x400.jpg'

        },
        {
            id: 5,
            title: 'Улитка',
            price: 60,
            image: 'images/snailYellowAmpoule1.jpg'
        },
        {
            id: 6,
            title: 'Креветка',
            price: 60,
            image: 'images/srimpGreenBabaulti-300x400.jpg'
        }
    ],
    selectedProduct: null
}

export const products = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_PRODUCT: {
            return {
                ...state,
                selectedProduct: action.product
            }
        }; 
    
        default: 
            return state
            
        
    }
}
