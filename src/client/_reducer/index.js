import { combineReducers } from 'redux';
import { alertReducer } from './alert.reducer';
import { userReducer } from './user.reducer';
import { authReducer } from './auth.reducer';

const rootReducer = combineReducers({
    alertReducer,
    userReducer,
    authReducer
});

export default rootReducer;