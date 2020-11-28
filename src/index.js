// import cors from 'cors';
// import express from 'express';
import { ApolloServer, PubSub } from 'apollo-server';

import { getUser, exitHandler } from './utils/helper';

import schemas from './schema';
import resolvers from './resolvers';

import setupMongoose from './utils/setup-mongoose';

// const app = express();
// app.use(cors());

// initialize pubsub object
export const pubsub = new PubSub();

// create apollo server
const server = new ApolloServer({
  typeDefs: schemas,
  resolvers,
  context: async ({ req }) => {
    if (!req || !req.headers) {
      return;
    }

    const currentUser = await getUser(req);
    return {
      currentUser
    };

  },
  tracing: true,
  cors: true
});

// server.applyMiddleware({ app, path: '/graphql' });
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
// app.listen(5000, setupMongoose);

// process.on('SIGINT', exitHandler);
// process.on('SIGQUIT', exitHandler);
// process.on('SIGTERM', exitHandler);


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb://admin:lGSjSo2c9x4D0eh5@SG-test-39980.servers.mongodirector.com:27017/admin";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   console.log(err);
//   console.log('Connected');
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
