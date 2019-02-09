import { userConstants } from '../_constant';

export function userReducer(state = {}, action) {
    switch (action.type) {
        case userConstants.REGISTER_REQUEST:
            return Object.assign({}, state, {
                isUserFetching: true, isUserSuccess: false
            });
        case userConstants.REGISTER_SUCCESS:
            return Object.assign({}, state, {
                isUserFetching: false, isUserSuccess: true
            });
        case userConstants.REGISTER_FAILED:
            return Object.assign({}, state, {
                isUserFetching: false, isUserSuccess: false
            });
        case userConstants.GETALL_REQUEST:
            return Object.assign({}, state, {
                isUserFetching: true, isUserSuccess: false
            });
        case userConstants.GETALL_SUCCESS:
            return Object.assign({}, state, {
                isUserFetching: false, isUserSuccess: true, userList: action.userList
            });
        case userConstants.GETALL_FAILED:
            return Object.assign({}, state, {
                isUserFetching: false, isUserSuccess: false
            });
        default:
            return state;
    }
};