import { combineReducers } from 'redux'
import products from './poducts';
import bag from './Bag';

const appReducer = combineReducers({
    products,
    bag
})

export { appReducer }