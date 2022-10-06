import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import Headers from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
<<<<<<< HEAD
import { ApolloClient } from "@apollo/client";

function App() {
  return (
    <div className="App">
      <Headers />
      <ApolloClient>
        <Main />
        <Footer />
      </ApolloClient>
    </div>
=======
import { setContext } from "@apollo/client/link/context";
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Headers />
        <Main />
        <Footer />
      </div>
    </ApolloProvider>
>>>>>>> 54a10b50e42f96bb6e86bb615af82fab40435b4b
  );
}

export default App;
