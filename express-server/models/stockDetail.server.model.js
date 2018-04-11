
import mongoose from 'mongoose';

var Schema = mongoose.Schema({
    vendor_number : String,
    customer_number : String,
    accessory_id : String,
    available_quantity : Number,
    requested_quantity : Number,
});

export default mongoose.model('stockDetail', Schema,'stockdetails');


