import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'group',
  }
});

const message = mongoose.model('message', messageSchema);

export default message;