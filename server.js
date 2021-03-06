process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const configureMongoose = require('./mongoose');
const configureExpress = require('./express');

const db = configureMongoose();
const app = configureExpress();
app.listen(8080);
module.exports = app;

console.log('Server running at http://localhost:8080/');