
import mongoose from 'mongoose';

var Schema = mongoose.Schema({
    customer_number : String,
    customer_name : String,
    Country : String,
    region : String
});

export default mongoose.model('customer', Schema,'custmaster');


