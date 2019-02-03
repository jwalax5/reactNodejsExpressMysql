const express = require('express');
const os = require('os');

const app = express();
const route = require('./route');

app.use('/api', route);

app.use(express.static('dist'));
app.get('/api/hihi', (req, res) => res.send({ username: 'josh' }));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
