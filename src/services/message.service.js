import messageModel from '../models/message.model';

const addMessage = async ({ email, message, groupId }) => {
  const newMessage = await messageModel.create({ email, message, group: groupId });
  return newMessage;
};

const getMessages = async ({ groupId }) => {
  let messages = [];
  if (groupId) {
    messages = await messageModel.find({ group: groupId }).populate('group').exec();
  } else {
    messages = await messageModel.find({}).populate('group').exec();
  }
  return messages;
};

export {
  addMessage,
  getMessages,
};
