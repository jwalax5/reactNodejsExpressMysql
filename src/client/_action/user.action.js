import { userConstants } from '../_constant';
import { userService } from '../_service';
import { alertAction } from './alert.action';


const loginRequest = (username) => {
    return {
        type: userConstants.LOGIN_REQUEST,
        username
    }
};

const loginSuccess = () => {
    return {
        type: userConstants.LOGIN_SUCCESS
    }
};

const loginFailed = () => {
    return {
        type: userConstants.LOGIN_FAILED
    }
};

function login(username, password) {

    return dispatch => {
        dispatch(loginRequest(username));

        userService.login(username, password)
            .then(
                data => {
                    dispatch(loginSuccess());
                    dispatch(alertAction.success('login success'));
                },
                error => {
                    dispatch(loginFailed());
                    dispatch(alertAction.error('login failed'));
                }
            );
    };
};

const registerRequest = () => {
    return {
        type: userConstants.REGISTER_REQUEST
    }
};

const registerSuccess = () => {
    return {
        type: userConstants.REGISTER_SUCCESS
    }
};

const registerFailed = () => {
    return {
        type: userConstants.REGISTER_FAILED
    }
};

function register(user) {
    return dispatch => {
        dispatch(registerRequest());

        userService.register(user)
            .then(
                success => {
                    console.log('hihii');
                    dispatch(registerSuccess());
                    dispatch(alertAction.success('register success'));
                    dispatch(userAction.getAll());
                }
                , failed => {
                    dispatch(registerFailed());
                    dispatch(alertAction.error('register failed'));
                }
            )
    }
};

const getAllRequest = () => {
    return {
        type: userConstants.GETALL_REQUEST
    }
};

const getAllSuccess = (userList) => {
    return {
        type: userConstants.GETALL_SUCCESS,
        userList
    }
};

const getAllFailed = () => {
    return {
        type: userConstants.GETALL_FAILED
    }
};

function getAll() {
    return dispatch => {
        dispatch(getAllRequest());

        userService.getAll()
            .then(userList => {
                console.log('yyy', userList);
                dispatch(getAllSuccess(userList));
            })
    }
};

export const userAction = { login, register, getAll };