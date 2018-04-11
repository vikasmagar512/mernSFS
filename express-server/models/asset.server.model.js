import mongoose from 'mongoose';

var Schema = mongoose.Schema({
  asset_id: String,
  description: String,
  Country: String,
  region: String,
  location: String,
  postal_code: String,
  street: String,
  latitude: String,
  longitude: String,
});

export default mongoose.model('Asset', Schema,'assetinfo');


