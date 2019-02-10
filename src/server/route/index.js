const route = require('express').Router();
const users = require('./usersController');
const transaction = require('./transactionController');
const admin = require('./adminController');
const product = require('./productController');
const auth = require('../auth')

//so middleware should put under private route
route.use([auth.getTokenFromHeader, auth.verifyToken]);
route.use('/users', users);
route.use('/transaction', transaction);
route.use('/admin', admin);
route.use('/product', product);

route.get('/hihi', (req, res) => {
    res.status(200).json({ message: 'Connected!' });
});

module.exports = route;
