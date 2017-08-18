const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MediSchema = new Schema({
    medi_id: { type: Number, required: true },
    medi_img_url: String,
    medi_description: String,
    customers: [{ type: Schema.Types.ObjectId, ref: 'Customer' }]

});


mongoose.model('Medicine', MediSchema);