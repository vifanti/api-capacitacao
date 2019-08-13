const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vifanti:280695@crud-nodejs-vf8hk.mongodb.net/capacitacao-api-unimetrocamp?retryWrites=true&w=majority', {
    useNewUrlParser: true
});
const app = express()
 
app.use('/', require('./routes'))

module.exports = app;