
import mongoose from 'mongoose';

var Schema = mongoose.Schema({
    agreementNumber : String,
    scheduleNumber : Number,
    rental_amount : String,
    rental_frequency : Number,
    rental_start_date : Number,
    number : Number,
    type : String,
    rental_in_advance : String,
    rental_payment_code : String

});

export default mongoose.model('rental', Schema,'rental');


