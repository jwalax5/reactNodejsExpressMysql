const express = require('express');
const app = express();
const route = require('./route');
const auth = require('./auth');

app.use('/api', route);

app.use(express.static('dist'));
app.get('/hihi', (req, res) => res.send({ username: 'josh' }));

app.get('/login', (req, res) => {
    console.log('login');
    auth.signJwt()
        .then((result) => {
            res.send({ token: result })
        })
        .catch((failed) => {
            res.send({ token: failed })
        });
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
