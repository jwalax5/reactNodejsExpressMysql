import { alertConstant } from '../_constant';

export function alertReducer(state = {}, action) {
    switch (action.type) {
        case alertConstant.ALERT_SUCCESS:
            return Object.assign({}, state, {
                alert: { message: action.message, type: 'alert-success' }
            });
        case alertConstant.ALERT_FAILED:
        return Object.assign({}, state, {
            alert: { message: action.message, type: 'alert-danger' }
        });
        case alertConstant.ALERT_CLEAR:
        return Object.assign({}, state, {
            alert: { message: '', type: '' }
        });
        default:
            return state;
    }
};