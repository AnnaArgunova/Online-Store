import { combineReducers } from 'redux'
import products from './poducts';
import bag from './Bag';
import auth from './auth'

const appRedux = combineReducers({
    products,
    bag,
    auth
})

const reducer = (state, action) =>{
    return appRedux(state, action)
}
export default reducer 