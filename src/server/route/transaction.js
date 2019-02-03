const transaction = require('express').Router();
const connection = require('./connection');


transaction.get('/hihi',(req,res)=> res.send({ss:'hihi'}));

transaction.get('/test',(req,res)=>{
    console.log('test db transaction connection');
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

module.exports = transaction;