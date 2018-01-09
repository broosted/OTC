const Medicine = require('mongoose').model('Medicine');
const Customer = require('mongoose').model('Customer');

exports.create = function(req, res, next) {
    const medicine = new Medicine(req.body);

    medicine.save((err) => {
        if (err) {
            return next(err);
        } else {
            res.status(200).json(medicine);
        }
    });
};

exports.createRef = function(req, res, next) {


    Customer.findOne({ _id: req.params.customerId },
        (err, customer) => {
            if (err) {
                return next(err);
            } else {

                console.log(req.params.customerId)
                    // to push new values to existing document we use $push and the object name and value
                Medicine.findOneAndUpdate({ _id: req.param('mediId') }, { $push: { "customers": customer } }, { 'new': true },
                    (err, medicine) => {

                        if (err) {
                            console.log('getting error');
                            return next(err);
                        } else {
                            
                            res.status(200).json(customer);
                        }
                    });

            }

        });


};


exports.list = function(req, res, next) {
    Medicine.find({}, (err, medicines) => {
        if (err) {
            return next(err);
        } else {
            res.status(200).json(medicines);
        }
    }).populate('customers');
};

exports.listByMedId = function(req, res, next) {

    Medicine.findOne({ _id: req.params.medId })
        .exec((err, medicine) => {
            if (err) {
                return next(err);
            } else {
                Customer.find().where('_id').in(medicine.customers).exec((err, customers) => {
                    if (err) {
                        return next(err);
                    } else {
                        res.status(200).json(customers);
                    }
                });

            }
        });



};

exports.read = function(req, res) {
    res.json(req.medicine);
};


exports.medicineByID = function(req, res, next, id) {
    Medicine.findOne({
        _id: id
    }, (err, medicine) => {
        if (err) {
            return next(err);
        } else {
            req.medicine = medicine;
            next();
        }
    });
};

exports.update = function(req, res, next) {
    Medicine.findByIdAndUpdate(req.medicine.id, req.body, {
        'new': true
    }, (err, medicine) => {
        if (err) {
            return next(err);
        } else {
            res.status(200).json(medicine);
        }
    });
};

exports.delete = function(req, res, next) {
    req.medicine.remove(err => {
        if (err) {
            return next(err);
        } else {
            res.status(200).json(req.medicine);
        }
    })
};