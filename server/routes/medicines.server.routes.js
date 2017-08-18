const medicines = require('../controllers/medicines.server.controller');

module.exports = function(app) {
    app.route('/medicines')
        .post(medicines.create)
        .get(medicines.list);

    app.route('/medicines/:medicineId')
        .get(medicines.read).put(medicines.update)
        .delete(medicines.delete);


    app.param('medicineId', medicines.medicineByID);
};