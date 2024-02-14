import { useContext } from "react";
import {Navigate} from 'react-router-dom'
import { UserContext } from "../../context/UserContext";

function LoggedIn({children}) {

    const {isLoggedIn} = useContext(UserContext)

    if (isLoggedIn) {
    return <Navigate to="/profile" />;
  }

  return children
 
}

export default LoggedIn
  