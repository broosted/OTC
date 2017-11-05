const Medicine = require('mongoose').model('Medicine');

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


exports.list = function(req, res, next) {
    Medicine.find({}, (err, medicines) => {
        if (err) {
            return next(err);
        } else {
            res.status(200).json(medicines);
        }
    }).populate('customers');
};

exports.listByMedId = function(req, res, next, id) {
    Medicine.findOne({ _id: id }).populate('customers')
        .exec((err, medicine) => {
            if (err) {
                return next(err);
            } else {
                //console.log(medicine.customers);
                res.status(200).json(medicine.customers);
                //req.customer = customer;
                next();
            }
        });

};

exports.read = function(req, res) {
    res.json(req.medicine);
};

exports.readCs = function(req, res) {
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