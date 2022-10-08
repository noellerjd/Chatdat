import React from "react";
import Chatbox from "./Chatbox";
import Subject from "./Subject";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Auth from "../utils/auth";

export default function Main() {
  if (Auth.loggedIn()) {
    return (
      <div
        style={{ border: "1px solid red", height: "700px", display: "flex" }}
      >
        <Chatbox />
        <Subject />
      </div>
    );
  } else {
    return (
      <div>
        <Signup />
        <Login />
      </div>
    );
  }
}
