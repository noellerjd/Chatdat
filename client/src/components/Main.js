import React from "react";
import Chatbox from "./Chatbox";
import Subject from "./Subject";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Auth from "../utils/auth";
import Header from "./Header";

export default function Main() {
  if (Auth.loggedIn()) {
    return (
      <div>
        <Header />
        <div style={{ height: "100%", display: "flex" }}>
          <Chatbox style={{ backgoundColor: "#223344" }} />
          <Subject />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <div>
          <Signup />
          <Login />
        </div>
      </div>
    );
  }
}
