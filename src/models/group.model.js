import mongoose from 'mongoose';

const groupSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const group = mongoose.model('group', groupSchema);

export default group;
