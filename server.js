var express = require('express');
var app = express();
const PORT = 3000;

var middlewear = require('./middlewear.js');

app.use(middlewear.logger);

app.get('/about', middlewear.requireAuthentication, function (req, res) {
    res.send('About us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
    console.log('Express server started on port number: ' + PORT + '!');
});
