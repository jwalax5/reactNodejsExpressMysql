const products = require('express').Router();
const connection = require('./connection');

products.get('/getAll', (req, res) => {
    console.log('test db user connection');
    // connection.connect();
    connection.query('SELECT * FROM Product', (error, results, fields) => {
        if (error) {
            console.log('error :', error);
            throw error;
        }
        console.log('results :', JSON.parse(JSON.stringify(results)));

        const chunkSize = 3;

        var productList = [];
        for (var i = 0; i < results.length; i += chunkSize) {
            productList.push(results.slice(i, i + chunkSize));
        }

        res.send(JSON.parse(JSON.stringify(productList)));
    });
});

module.exports = products;