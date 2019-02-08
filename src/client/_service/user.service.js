import { authHeader, handleHttpResponse } from '../_helper';

export const userService = {
    login,
    register,
    getAll
};


function login(username, password) {
    const req = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch('/api/login', req)
        .then(response => handleHttpResponse(response))
        .then(result => {
            console.log('show json', result);
            const { token } = result;
            localStorage.setItem('user', JSON.stringify({ user: 'josh', token }));
            return result;
        })
};

function register(user) {
    console.log('user', user);

    return new Promise((resolve, reject) => {
        getAll().then(
            allUsers => {
                if (!isExistedUsername(allUsers, user.username)) {
                    console.log('is new name');
                    allUsers.push(user);
                    localStorage.setItem('userList', JSON.stringify(allUsers));
                    resolve();
                }
                else {
                    console.log('is existed name');
                    reject();
                }
            },
            error => {
                console.log('is error get all');
                reject();
            }
        )
    });

};

function isExistedUsername(userList, username) {
    var isExist = false
    userList.map(registeredUser => {
        if (!isExist) {
            isExist = (username === registeredUser.username) ? true : false;
        }
    });

    return isExist;
};

function getAll() {

    var allUsers = JSON.parse(localStorage.getItem('userList')) || [];
    console.log('allUsers', allUsers);
    if (allUsers) {
        return Promise.resolve(allUsers);
    }
    else {
        return Promise.reject();
    }

};