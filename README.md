## Chatbook server

A realtime group chat application server using Graphql and ES6 with JWT authentication.

### Tech stack
1. Node.js
2. Mongoose
3. Apollo Server
4. JWT for Authentication

### Sample Queries

```
gql`
query MyQuery {
  groups {
    _id
    name
  }
  messages {
    _id
    email
    message
    group {
      _id
      name
    }
    createdAt
  }
}

mutation AddMessage {
  addMessage(email: "test@gmail.com", message: "test", groupId: "5fc106e6aafc9352208576a8") {
    _id
    message
    createdAt
  }
}

subscription MySub {
  messageAdded {
    message
  	email
    createdAt
  }
}

query Login {
  login(email: "test@gmail.com", password: "test123") {
    token
  }
}
`
```

### Quick setup
1. npm install/yarn
2. npm run start/ yarn start

### Other useful scripts
1. npm run lint (see lint erros)
2. npm run lint-fix (fix potentially fixable)


### TODO List
1. Add unit/regression tests
2. Add/Configure webpack for bundling
3. Add logger
4. Move constants to a seperare file
5. Create model for user (save to db)