const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustSchema = new Schema({
    customer_id: { type: Number, required: true },
    customer_name: String,
    customer_rating: Number,
    customer_review: String
});

mongoose.model('Customer', CustSchema);