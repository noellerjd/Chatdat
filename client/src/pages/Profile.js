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
};
