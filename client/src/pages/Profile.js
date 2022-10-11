import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Header from "../components/Header";

import Auth from "../utils/auth";

import { QUERY_USER, QUERY_ME } from "../utils/queries";

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  if (Auth.loggedIn() && Auth.getProfile().data.username === useParams) {
    return <Navigate to="/profile" />;
  }

  if (loading) {
    return <div>Loading Profile please wait</div>;
  }

  if (!user?.username) {
    return (
      <div>
        <Header />
        <h2
          style={{
            backgroundColor: "#f3f3f3",
            margin: "5px",
            padding: "5px",
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          Please make sure you are logged in to see your profile... Return to
          the <a href="/">homepage</a> to sign in or sign up!
        </h2>
      </div>
    );
  }

  //   Here we are going to create the front end element of how the profile page will load and look

  return (
    <div>
      <Header />
      <div
        style={{
          backgroundColor: "#f3f3f3",
          margin: "5px",
          padding: "5px",
          borderRadius: "5px",
          textAlign: "center",
        }}
      >
        <h2>Welcome, {Auth.getProfile().data.username}</h2>
        <p>This is where your selected chat cards would show...</p>
      </div>
    </div>
  );
};

export default Profile;
