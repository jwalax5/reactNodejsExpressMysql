import { alertConstant } from '../_constant';

export const alertAction = {
    success,
    error,
    clear
};

function success(message) {
    return {
        type: alertConstant.ALERT_SUCCESS,
        message
    }
};

function error(message) {
    return {
        type: alertConstant.ALERT_FAILED,
        message
    }
};

function clear() {
    return {
        type: alertConstant.ALERT_CLEAR
    }
};