const Customer = require('mongoose').model('Customer');

exports.create = function(req, res, next) {
    const customer = new Customer(req.body);

    customer.save((err) => {
        if (err) {
            return next(err);
        } else {
            res.status(200).json(customer);
        }
    });

};


exports.list = function(req, res, next) {
    Customer.find({}, (err, customers) => {
        if (err) {
            return next(err);
        } else {
            res.status(200).json(customers);
        }
    });
};



exports.read = function(req, res) {
    res.json(req.customer);
};

exports.customerByID = function(req, res, next, id) {
    Customer.findOne({
        _id: id
    }, (err, customer) => {
        if (err) {
            return next(err);
        } else {
            req.customer = customer;
            next();
        }
    });
};

exports.update = function(req, res, next) {
    Customer.findByIdAndUpdate(req.customer.id, req.body, {
        'new': true
    }, (err, customer) => {
        if (err) {
            return next(err);
        } else {
            res.status(200).json(customer);
        }
    });
};

exports.delete = function(req, res, next) {
    req.customer.remove(err => {
        if (err) {
            return next(err);
        } else {
            res.status(200).json(req.customer);
        }
    })
};