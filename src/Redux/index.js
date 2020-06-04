import { createStore, applyMiddleware } from 'redux'
import apiMiddleware from 'Redux/Middleware/api'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './Reducer'

export const storeCreator = () => {
    const middleware = composeWithDevTools(applyMiddleware(apiMiddleware))
    const store = createStore(reducer, middleware)
    return store;
}

