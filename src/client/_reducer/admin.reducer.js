import { adminConstant } from '../_constant';

const initState = {
    isAdminFetching: false,
    isUserFetching: false,
    isAdminSuccess: false,
    isUserSuccess: false,
    isUserTableUpdated: false,
    updateCellList: []
};

export function adminReducer(state = initState, action) {
    switch (action.type) {
        case adminConstant.ADMIN_SAVE_REQUEST:
            return Object.assign({}, state, {
                 ...state,
                isAdminFetching: true, isAdminSuccess: false
            });
        case adminConstant.ADMIN_SAVE_SUCCESS:
            return Object.assign({}, state, {
                ...state,
                isAdminFetching: false, isAdminSuccess: true, message: action.message
            });
        case adminConstant.ADMIN_SAVE_FAILED:
            return Object.assign({}, state, {
                ...state,
                isAdminFetching: false, isAdminSuccess: false, message: action.message
            });
        case adminConstant.USERTABLE_UPDATE_CELL:
            return Object.assign({}, state, {
                ...state,
                isUserTableUpdated: true, updateCellList: [...action.updateCellList, action.editedUser]
            });
        default:
            return state;
    }
};