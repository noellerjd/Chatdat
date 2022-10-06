import React from "react";
import Headers from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
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
  );
}

export default App;
