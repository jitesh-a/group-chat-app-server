import { pubsub } from '../';
import { addMessage, getMessages } from '../services/message.service';
import { authenticate } from '../utils/helper';

const MESSAGE_ADDED = 'MESSAGE_ADDED';

export default {
  Query: {
    // group: async (parent, { id }, { models: { groupModel }, me }, info) => {
    //   if (!me) {
    //     throw new AuthenticationError('You are not authenticated');
    //   }
    //   const group = await groupModel.findById({ _id: id }).exec();
    //   return group;
    // },
    messages: async (parent, args, { currentUser }, info) => {
      authenticate(currentUser);
      return getMessages(args);
    },
  },

  Mutation: {
    addMessage: async (parent, args, { currentUser }, info) => {
      authenticate(currentUser);
      const newMessage = addMessage(args);
      pubsub.publish(MESSAGE_ADDED, { messageAdded: newMessage });
      return newMessage;
    },
  },

  Subscription: {
    messageAdded: {
      // Additional event labels can be passed to asyncIterator creation
      subscribe: () => pubsub.asyncIterator([MESSAGE_ADDED]),
    },
  },
};