
import mongoose from 'mongoose';

var Schema = mongoose.Schema({
    document_id : String,
    customer_number : String,
    quotation_type : String,
    status : String,
    submitted_date : String
});

export default mongoose.model('quotationDetails', Schema,'quotations');

