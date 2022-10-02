const { gql } = require("apollo-server-express");

const typeDefs = gql`
type User {
    _id: _id
    username: String
    password: String
    comments: [Comment]!
}

type Comment {

    _id: ID
    commentText: String
    commentAuthor: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    users: [User]
    user(username: String! ): User
    comments:(username: String) : [Comment]
    comment(commentId: ID!): Thought
    me: User
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addComment(commentText: String!) : Thought
    removeComment(commentId: ID!) : Comment
}
`;

module.exports = typeDefs;
