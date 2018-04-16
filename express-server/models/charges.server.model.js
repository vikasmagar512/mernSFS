
import mongoose from 'mongoose';

var Schema = mongoose.Schema({
    agreementNumber : String,
    scheduleNumber : Number,
    charge_amount : String,
    charge_frequency : Number,
    charge_start_date : Number,
    number : Number,
    type : String,
    charge_description : String,
});

export default mongoose.model('Charge', Schema,'charges');


