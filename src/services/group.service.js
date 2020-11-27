import groupModel from '../models/group.model';

const getAllGroups = async () => {
  const groups = await groupModel.find().exec();
  return groups;
}

export {
  getAllGroups
}