const route = require('express').Router();
const users = require('./users');
const transaction = require('./transaction');

route.use('/users', users);
route.use('/transaction', transaction);

route.get('/hihi', (req, res) => {
    res.status(200).json({ message: 'Connected!' });
});

module.exports = route;
