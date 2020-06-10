import { LOG_IN} from '../Action/auth0';
import { createReducer } from 'Helpers/reducer';
const initialState = {
    user: null,
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
 

 }



export default createReducer(initialState, auth)
