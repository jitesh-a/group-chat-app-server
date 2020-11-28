const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
    name: String!
    profileImage: String
  }

  type Token {
    token: String!
  }

  type Group {
    _id: ID!
    name: String
  }

  type Message {
    _id: ID!
    email: String
    message: String
    group: Group
    createdAt: String
  }

  type Query {
    users: [User]
    groups: [Group]
    messages(groupId: ID): [Message]
    user(id: ID!): User
    login(email: String!, password: String!): Token!
  }

  type Mutation {
    addMessage(email: String!, message: String!, groupId: ID!): Message
  }
  
  type Subscription {
    messageAdded: Message
  }
`;

module.exports = typeDefs;
