const users = require('express').Router();
const connection = require('./connection');
//const auth = require('../auth');

//users.use([auth.getTokenFromHeader, auth.verifyToken]);

users.get('/hihi', (req, res) => res.send({ ss: 'hihi' }));

users.get('/getAll', (req, res) => {
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


users.post('/needToken', (req, res) => {
    console.log('need token');
    console.log(req.token);
    res.send({
        message: 'have token',
        authData: req.authData
    })
});

module.exports = users;