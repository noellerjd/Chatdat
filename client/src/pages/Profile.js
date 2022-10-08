import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import Auth from "../utils/auth";

import { QUERY_USER, QUERY_ME } from "../utils/queries";

const Profile = () => {
  const { username: useParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  if (Auth.loggedIn() && Auth.getProfile().data.username === useParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading Profile please wait</div>;
  }

  if (!user?.username) {
    return (
      <h2>
        Please make sure you are logged in to see your profile... use the Signup
        or the Signin forms to continue!
      </h2>
    );
  }

  //   Here we are going to create the front end element of how the profile page will load and look
};

export default Profile;
