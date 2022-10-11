import React from "react";
import Logo from "./images/ChatDatLogo.png";

export default function Headers() {
  return (
    <div
      className="header"
      style={{
        height: "10vh",
        backgroundColor: "#232323",
      }}
    >
      <a
        href="/"
        className="Logo"
        style={{ height: "100%", cursor: "pointer" }}
      >
        <img
          src={Logo}
          alt="ChatDat"
          style={{ height: "100%", cursor: "pointer" }}
        />
      </a>
      <div className="nav-links">
        <a href="/" className="home-link">
          Home
        </a>
        <a href="/profile">Profile</a>
        <a href="/contact">Contact us</a>
        <a href="/logout">Logout</a>
      </div>
      {/* <span>
        This is the header which would house the logo, title and hamburger menu
      </span> */}
    </div>
  );
}
