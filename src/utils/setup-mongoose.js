require('dotenv').config();
import mongoose from 'mongoose';

const { DB_USER, DB_PASS } = process.env;

const groups = [
  {
    name: 'Test 1'
  },
  {
    name: 'Test 2'
  },
  {
    name: 'Test 3'
  },
  {
    name: 'Test 4'
  },
  {
    name: 'Test 5'
  },
  {
    name: 'Test 6'
  },
]

const URI = `mongodb://${DB_USER}:${DB_PASS}@SG-test-39980.servers.mongodirector.com:27017/test`;
// URI = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.b9fwu.mongodb.net/test?retryWrites=true&w=majority`;

const setupMongoose = (() => {
  mongoose.connect(URI, { useNewUrlParser: true, useFindAndModify: false });
  const { connection } = mongoose;
  global.DB_CONNECTION = connection;
  connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
    // connection.collection('groups').insertMany(groups);
    // connection.close();
  });
})();

export default setupMongoose;
