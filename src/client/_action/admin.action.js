import { adminConstant } from '../_constant';
import { adminService } from '../_service';
import { alertAction } from './alert.action';

export const adminAction = {
    save,
    updateUserList
};

function saveRequest() {
    console.log('call dispatch');
    return {
        type: adminConstant.ADMIN_SAVE_REQUEST
    }
};

function saveSuccess(message) {
    return {
        type: adminConstant.ADMIN_SAVE_SUCCESS,
        message
    }
};

function saveError(message) {
    return {
        type: adminConstant.ADMIN_SAVE_FAILED,
        message
    }
};

function save(userList) {
    return dispatch => {
        dispatch(saveRequest());

        adminService.save(userList)
            .then(
                success => {
                    console.log('save success ', success);
                    dispatch(saveSuccess(success));
                    dispatch(alertAction.success('Save user success'));
                }
                , failed => {
                    console.log('save failed ', failed);
                    dispatch(saveError(failed));
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
