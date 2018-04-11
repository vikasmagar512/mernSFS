
import mongoose from 'mongoose';

var Schema = mongoose.Schema({
    po_number : String,
    vendor_number : String,
    customer_number : String,
    accessory_id : String,
    po_submitted_date : String,
    expected_date : String,
    status : String,
    requested_quantity : String
});

export default mongoose.model('orderDetails', Schema,'orderdetails');

