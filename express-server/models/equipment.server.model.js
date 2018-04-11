import mongoose from 'mongoose';

var Schema = mongoose.Schema({
  asset_id: String,
  agreement_number: String,
  schedule_number: String,
  equipment_description: String,
  serial_number: String,
  location: String,
  equipment_condition: String,
  quantity: String,
  equipment_supplier: String,
  equipment_supplier_billing: String,
  residual_value: String,
  // Country: String,
  // region: String,
  // postal_code: String,
  // street: String,
  // latitude: String,
  // longitude: String,
});

export default mongoose.model('Equipment', Schema,'equipment');


