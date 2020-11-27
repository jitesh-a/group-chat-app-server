import { AuthenticationError } from 'apollo-server';
import { getAllGroups } from '../services/group.service';
import { authenticate } from '../utils/helper';

export default {
  Query: {
    // group: async (parent, { id }, { models: { groupModel }, me }, info) => {
    //   if (!me) {
    //     throw new AuthenticationError('You are not authenticated');
    //   }
    //   const group = await groupModel.findById({ _id: id }).exec();
    //   return group;
    // },
    groups: async (parent, args, { currentUser }, info) => {
      authenticate(currentUser);
      return getAllGroups();
    },
  }
};