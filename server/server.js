require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const { authMiddleware } = require("./utils/auth");

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();
// const http = require("http").createServer(app);
// const io = require("socket.io")(http);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// io.on("connection", (socket) => {
//   socket.on("message", ({ name, message }) => {
//     io.emit("message", { name, message });
//   });
// });
// http.listen(3000, function () {
//   console.log("listening on port 3000");
// });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`ChatDat API server running on ${PORT}`);
      console.log(`GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};

startApolloServer(typeDefs, resolvers);
