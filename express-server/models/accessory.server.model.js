
import mongoose from 'mongoose';

var Schema = mongoose.Schema({
    accessory_id : String,
    accessory_category : String,
    accessory_name: String,
    accessory_details: String,
    unit : String,
});

export default mongoose.model('accessory', Schema,'accessories');

