const express = require('express');
const app = express();
const route = require('./route');
const auth = require('./auth');
const connection = require('./route/connection');
const bodyParser = require('body-parser');

app.use('/api/route', route);
app.use(bodyParser.json());
app.use(express.static('dist'));
app.get('/api/hihi', (req, res) => res.send({ id: 1, username: 'josh' }));

app.post('/api/login', (req, res) => {
    console.log('login');
    console.log('here check username first')
    console.log(req.body);
    connection.query('SELECT * FROM testUser where name =? and password=?', [req.body.username,req.body.password], (error, results, fields) => {
        if (error) {
            console.log('error :', error);
            throw error;
        }
        console.log('results :', JSON.parse(JSON.stringify(results)));
        if (results.length > 0) {
            auth.signJwt()
                .then((result) => {
                    res.send({ token: result })
                })
                .catch((failed) => {
                    res.send({ token: failed })
                });
        }
        else {
            res.send('Invalid username or password');
        }

    });
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
