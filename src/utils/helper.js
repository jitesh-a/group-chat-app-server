import jwt from 'jsonwebtoken';
import { AuthenticationError } from 'apollo-server';

const getUser = async (req) => {
  const token = req.headers['token'];

  if (token) {
    try {
      const JWT_SECRET = getJWTSecret();
      return await jwt.verify(token, JWT_SECRET);
    } catch (e) {
      throw new AuthenticationError('Your session expired. Sign in again.');
    }
  }
};

const authenticate = (currentUser) => {
  if (!currentUser) {
    throw new AuthenticationError('You are not authenticated');
  }
}

const getJWTSecret = () => {
  const JWT_SECRET = process.env.JWT_SECRET || 'mysecret';
  return JWT_SECRET;
}

export {
  getUser,
  getJWTSecret,
  authenticate
}