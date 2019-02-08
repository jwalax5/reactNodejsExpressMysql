import { userConstants } from '../_constant';

export function userReducer(state = {}, action) {
    switch (action.type) {
        case userConstants.REGISTER_REQUEST:
            return Object.assign({}, state, {
                isFetching: true, isSuccess: false
            });
        case userConstants.REGISTER_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false, isSuccess: true
            });
        case userConstants.REGISTER_FAILED:
            return Object.assign({}, state, {
                isFetching: false, isSuccess: false
            });
        case userConstants.GETALL_REQUEST:
            return Object.assign({}, state, {
                isFetching: true, isSuccess: false
            });
        case userConstants.GETALL_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false, isSuccess: true, userList: action.userList
            });
        case userConstants.GETALL_FAILED:
            return Object.assign({}, state, {
                isFetching: false, isSuccess: false
            });
        default:
            return state;
    }
};