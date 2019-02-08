import { userConstants } from '../_constant';

export function authReducer(state = {}, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return Object.assign({}, state, {
                isFetching: true, isSuccess: false
            });
        case userConstants.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false, isSuccess: true
            });
        case userConstants.LOGIN_FAILED:
            return Object.assign({}, state, {
                isFetching: false, isSuccess: false
            });
        default:
            return state;
    }
};