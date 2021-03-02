const express = require('express');
var cors = require('cors')
const path = require('path');
const authRouter = require('./routers/authRouter');
const examRouter = require('./routers/examRouter');

const app = express();
app.use(cors())

// Setup static directory to serve 
app.use(express.static(path.join(__dirname, '../public')));

app.use(express.json());
app.use(authRouter);
app.use(examRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/404.html'))
})

module.exports = app;