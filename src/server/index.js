const express = require('express');
const os = require('os');

const app = express();
const route = require('./route');
// const mysql = require('mysql');


// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'wjm02126',
//     database: 'users'
// });

app.use('/api', route);

app.use(express.static('dist'));
app.get('/api/hihi', (req, res) => res.send({ username: 'josh' }));

// app.get('/api/test', (req, res) => {
//     console.log('test db connection');
//    // connection.connect();
//     connection.query('SELECT * FROM testUser', (error, results, fields) => {
//         if (error) {
//             console.log('error :', error);
//             throw error;
//         }
//         console.log('results :', JSON.parse(JSON.stringify(results)));
//         res.send(JSON.parse(JSON.stringify(results)));
//     });
//  //  connection.end();
// });

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
