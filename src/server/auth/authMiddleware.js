const jwt = require('jsonwebtoken');
const config = require('../../../config');

const secret = config.JWT_KEY;
//const secret = new Buffer('secretKey', 'base64');

function signJwt() {
    console.log('signJwt');
    const user = {
        id: 1,
        username: 'josh',
        email: 'josh@gmail.com'
    }

    var promise = new Promise((resolve, reject) => {
        console.log('secret', secret);
        jwt.sign({ user }, secret, (err, token) => {
            console.log('token', token);
            if (token) {
                console.log('hihi', token);
                resolve(token);
            } else {
                reject(err);
            }
        })
    });
    return promise;
};

function getTokenFromHeader(req, res, next) {
   // console.log('getTokenFromHeader');
    const bearerHeader = req.headers['authorization'];
    // console.log('bearerHeader', bearerHeader);
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        //   console.log('bearerToken', bearerToken);
        req.token = bearerToken;
        next();
    } else {
        res.status(403).json({
            message: 'Token is missing'
        });
    }
};

function verifyToken(req, res, next) {
    // console.log('ver tokennn ', req.token);
    jwt.verify(req.token, secret, (err, authData) => {
        //console.log('authData', authData);
        if (err) {
            res.status(403).json({
                message: err
            });
        } else {
        //    console.log('authData', authData);
            req.authData = authData;
            next();
        }
    });

    // var promise = new Promise((resolve, reject) => {
    //     console.log('ver token', token);
    //     jwt.verify(token, secret, (err, authData) => {
    //         console.log('authData', authData);
    //         if (err) {
    //             console.log('err', err);
    //             reject(err);
    //         } else {
    //             console.log('authData', authData);
    //             resolve(authData);
    //         }
    //     });

    // });
    // return promise;
};

module.exports = {
    verifyToken,
    getTokenFromHeader,
    signJwt
};