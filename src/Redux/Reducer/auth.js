import { LOG_IN, LOG_OUT} from '../Action/auth0';
import { createReducer } from 'Helpers/reducer';
const initialState = {
    user: {},
    isAuth:false
}

const auth = {
    [LOG_IN]: (state = initialState, action) => {
        
        return {
            ...state,
            isAuth:true,
            user: action.user

        }
    },

    [LOG_OUT]: (state = initialState, action) => {
        console.log('state.user>>>>>',state.user);
        
        return {
            ...state,
            isAuth:false,
            user: {}

        }
    }

 }



export default createReducer(initialState, auth)
