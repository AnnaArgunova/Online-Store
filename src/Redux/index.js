import { createStore, applyMiddleware } from 'redux'
import apiMiddleware from 'Redux/Middleware/api'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './Reducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
     whitelist: ['auth']

  }
  

  const persistedReducer = persistReducer(persistConfig, reducer)


export const storeCreator = () => {
    const middleware = composeWithDevTools(applyMiddleware(apiMiddleware))
    const store = createStore(persistedReducer, middleware)
    let persistor = persistStore(store)

    return {store, persistor};
}

