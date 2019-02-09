import { authHeader, handleHttpResponse } from '../_helper';

export const adminService = {
    save
};

function save(userList) {
    console.log('userList', userList);

    const { Authorization } = authHeader();
    console.log('hihi', Authorization);

    var req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' :Authorization
        },
        body: JSON.stringify(userList)
    }

    return fetch('/api/route/admin/updateUser', req)
        .then(response => handleHttpResponse(response))
        .then(result => {
            console.log('show json', result);
            return result;
        })

};
