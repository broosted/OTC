var express = require("express"),
    http = require('http'),
    bodyParser = require('body-parser');


app = express();


const configureMongoose = require('../mongoDB/mongoose');

const db = configureMongoose();



// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


require('./routes/customers.server.routes')(app);
require('./routes/medicines.server.routes')(app);


app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000/');