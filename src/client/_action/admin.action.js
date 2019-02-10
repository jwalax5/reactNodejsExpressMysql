import { adminConstant } from '../_constant';
import { adminService } from '../_service';
import { alertAction } from './alert.action';
import { userAction } from './user.action';

export const adminAction = {
    saveUser,
    updateUserList
};

function saveUserRequest() {
    return {
        type: adminConstant.ADMIN_SAVE_REQUEST
    }
};

function saveUserSuccess(message) {
    return {
        type: adminConstant.ADMIN_SAVE_SUCCESS,
        message
    }
};

function saveUserError(message) {
    return {
        type: adminConstant.ADMIN_SAVE_FAILED,
        message
    }
};

function saveUser(userList) {
    return dispatch => {
        dispatch(saveUserRequest());

        adminService.save(userList)
            .then(
                success => {
                    console.log('save success ', success);
                    dispatch(saveUserSuccess(success));
                    dispatch(userAction.getAllUser());
                    dispatch(alertAction.success('Save user success'));
                }
                , failed => {
                    console.log('save failed ', failed);
                    dispatch(saveUserError(failed));
                    dispatch(alertAction.error('Save user failed'));
                }
            )
    }
};

function updateUserList(updateCellList, editedUser) {
    console.log('updateUserList');
    return {
        type: adminConstant.USERTABLE_UPDATE_CELL,
        updateCellList,
        editedUser
    }
}
