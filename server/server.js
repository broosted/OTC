var path = require("path"),
    express = require("express"),
    http = require('http'),
    bodyParser = require('body-parser');


var DIST_DIR = path.join(__dirname, '..', "public", "dist"),
    app = express();


const configureMongoose = require('../mongoDB/mongoose');

const db = configureMongoose();



// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Serving the files on the dist folder
app.use(express.static(DIST_DIR));


require('./routes/customers.server.routes')(app);
require('./routes/medicines.server.routes')(app);


//Send index.html when the user access the web
app.get("*", function(req, res) {
    res.sendFile(path.join(DIST_DIR, "index.html"));
});


app.listen(8080);
module.exports = app;

console.log('Server running at http://localhost:8080/');