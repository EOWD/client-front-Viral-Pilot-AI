/* eslint-disable react/prop-types */
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "../layout/loadingSpinne/LoadingSpinner";

function IsPrivate({ children }) {
  const { isLoading, isLoggedIn } = useContext(UserContext);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
}
export default IsPrivate;