const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-easy-auto-increment');


const CustSchema = new Schema({
    customer_id: { type: String, required: true },
    customer_name: String,
    customer_rating: Number,
    customer_review: String
});

CustSchema.plugin(autoIncrement, { field: 'customer_id', collection: 'customers' });

mongoose.model('Customer', CustSchema);