import { combineReducers } from 'redux';
import { alertReducer } from './alert.reducer';
import { userReducer } from './user.reducer';
import { authReducer } from './auth.reducer';
import { adminReducer } from './admin.reducer';

const rootReducer = combineReducers({
    alertReducer,
    userReducer,
    authReducer,
    adminReducer
});

export default rootReducer;