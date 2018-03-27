import mongoose from 'mongoose';

var Schema = mongoose.Schema({
  id: Number,
  name: String,
  type: String
});

export default mongoose.model('Device', Schema);
