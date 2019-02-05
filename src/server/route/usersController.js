const users = require('express').Router();
const connection = require('./connection');
//const auth = require('../auth');

//users.use([auth.getTokenFromHeader, auth.verifyToken]);

users.get('/hihi', (req, res) => res.send({ ss: 'hihi' }));

users.get('/test', (req, res) => {
    console.log('test db user connection');
    // connection.connect();
    connection.query('SELECT * FROM testUser', (error, results, fields) => {
        if (error) {
            console.log('error :', error);
            throw error;
        }
        console.log('results :', JSON.parse(JSON.stringify(results)));
        res.send(JSON.parse(JSON.stringify(results)));
    });
});

// users.get('/login', (req, res) => {
//     console.log('login');
//     auth.signJwt()
//         .then((result) => {
//             res.send({ token: result })
//         })
//         .catch((failed) => {
//             res.send({ token: failed })
//         });
// });

users.post('/needToken', (req, res) => {
    console.log('need token');
    console.log(req.token);
    res.send({
        message: 'have token',
        authData: req.authData
    })
});

module.exports = users;