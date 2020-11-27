// import cors from 'cors';
// import express from 'express';
import { ApolloServer, PubSub } from 'apollo-server';

import { getUser } from './utils/helper';

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