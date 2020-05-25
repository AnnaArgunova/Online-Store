import {combineReducers} from 'redux'
import {products} from './poducts'

const appReducer = combineReducers({
    products
})

export {appReducer}