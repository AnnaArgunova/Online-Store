import { combineReducers } from 'redux'
import products from './poducts';
import bag from './Bag';

const appRedux = combineReducers({
    products,
    bag
})

const reducer = (state, action) =>{
    return appRedux(state, action)
}
export default reducer 