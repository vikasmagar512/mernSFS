
import mongoose from 'mongoose';

var Schema = mongoose.Schema({
    vendor_number : String,
    vendor_name : String,
    country : String,
    region : String
});

export default mongoose.model('vendor', Schema,'vendormaster');


