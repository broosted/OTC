const mongoose = require('mongoose');
const config = require('./development');

module.exports = function() {
    const db = mongoose.connect(config.db);
    require('./server/models/customers.server.model');
    require('./server/models/medicines.server.model');
    return db;
};