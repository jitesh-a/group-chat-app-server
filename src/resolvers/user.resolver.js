import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { AuthenticationError } from 'apollo-server';
import { getJWTSecret } from '../utils/helper';

// dummy users
const users = [
  {
    _id: 1,
    email: 'jitesh.om@gmail.com',
    password: 'test123',
    name: 'Jitesh Ahuja'
  },
  {
    _id: 2,
    email: 'test@gmail.com',
    password: 'test123',
    name: 'Dummy User'
  }
]

export default {
  Query: {
    user: async (parent, { id }, context, info) => {
      // if (!me) {
      //   throw new AuthenticationError('You are not authenticated');
      // }
      const user = users.find(user => user._id === id);
      return user;
    },

    login: async (parent, { email, password }, context, info) => {
      const user = users.find(user => user.email === email && user.password === password);

      if (!user) {
        throw new AuthenticationError('Invalid credentials');
      }

      // const matchPasswords = bcrypt.compareSync(password, user.password);

      // if (!matchPasswords) {
      //   throw new AuthenticationError('Invalid credentials');
      // }

      const JWT_SECRET = getJWTSecret();
      const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: 24 * 10 * 50 });

      return {
        token
      };
    },

    users: async (parent, args, context, info) => {
      return users;
    },
  }
};