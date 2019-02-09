const admin = require('express').Router();
const connection = require('./connection');

admin.post('/updateUser', (req, res) => {
    console.log('updateUser');
    console.log(req.body);
    connection.beginTransaction((err) => {
        if (err) {
            console.log('top err', err);
            res.send({ message: 'Save Error : ${err}' });
        }
        var ind = 0;
        for (var user of req.body.updateCellList) {
            console.log('back end user', user);
            connection.query({ sql: 'UPDATE testUser SET name=? where id =?', values: [user.name, user.id], timeout: 60000 }, (error, results, fields) => {
                if (error) {
                    return connection.rollback(() => {
                        console.log('query fail', error);
                        throw error;
                    });
                }
                ind = ind + 1;
                console.log('ind', ind);
                if (ind === req.body.updateCellList.length) {
                    connection.commit((err) => {
                        if (err) {
                            return connection.rollback(() => {
                                console.log('commit fail');
                                throw err;
                            });
                        }
                        res.send({ message: 'Save Success' });
                    })
                }
            });
        }
    })
})

module.exports = admin;