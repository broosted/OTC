const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var sequenceGenerator = require('mongoose-sequence-plugin');


const CustSchema = new Schema({
    customer_id: { type: String, required: true },
    customer_name: String,
    customer_rating: Number,
    customer_review: String
});

CustSchema.plugin(sequenceGenerator, {
    field: 'customer_id',
    startAt: '69',
    prefix: 'MNH-',
    maxSaveRetries: 2
});

mongoose.model('Customer', CustSchema);