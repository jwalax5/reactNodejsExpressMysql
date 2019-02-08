export function authHeader() {
    let user;

    if (localStorage.getItem('user')) {
        user = JSON.parse(localStorage.getItem('user'));
    }

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    }
    else {
        return { 'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6Impvc2giLCJlbWFpbCI6Impvc2hAZ21haWwuY29tIn0sImlhdCI6MTU0OTQ2Mzg3N30.8Im32j3kpHCm1Zwz1X9zPgdJ2cU92bNv95mOmePZLTk' };
    }
}