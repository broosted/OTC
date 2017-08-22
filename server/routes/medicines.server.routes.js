const medicines = require('../controllers/medicines.server.controller');

module.exports = function(app) {
    app.route('/api/medicines')
        .post(medicines.create)
        .get(medicines.list);

    app.route('/api/medicines/:medicineId')
        .get(medicines.read).put(medicines.update)
        .delete(medicines.delete);


    app.param('medicineId', medicines.medicineByID);
};