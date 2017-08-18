const customers = require('../controllers/customers.server.controller');

module.exports = function(app) {
    app.route('/customers')
        .post(customers.create)
        .get(customers.list);

    app.route('/customers/:customerId')
        .get(customers.read).put(customers.update)
        .delete(customers.delete);


    app.param('customerId', customers.customerByID);
};