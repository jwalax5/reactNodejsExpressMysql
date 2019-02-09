const users = require('express').Router();
const connection = require('./connection');

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

module.exports = users;