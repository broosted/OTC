// Get dependencies

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes


module.exports = function() {

    const app = express();

    // Parsers for POST data
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    // Point static path to public
    app.use(express.static(path.join(__dirname, 'public')));



    require('./server/routes/customers.server.routes')(app);
    require('./server/routes/medicines.server.routes')(app);

    // Catch all other routes and return the index file
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'dist/index.html'));
    });




    return app;

};