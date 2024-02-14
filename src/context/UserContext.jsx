/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

const UserContextWrapper = ({ children }) => {

const API_URL = import.meta.env.VITE_APP_SERVER;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const getJwtToken = () => {
    return localStorage.getItem("authToken");
  };


  const authenticateUser = async () => {
    const jwtToken = getJwtToken();
    

    if (jwtToken) {
      try {

        const { data } = await axios(`${API_URL}/auth/verify`, {

          headers: {
            authorize: `Bearer ${jwtToken}`,
          },
        });
         console.log("User was verified:", data);
        setIsLoggedIn(true);
        setIsLoading(false);
        setUser(data);

      } catch (error) {
        setIsLoggedIn(false);
        setIsLoading(false);
        setUser(null);
        navigate("/login");
        console.log("Invalid token", error);
      }
    } else {
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
      console.log("No JWT Token found");
    }
  
  };
  /* console.log(user) */


const handleLogout = () => {
    //remove token from local storage
    localStorage.removeItem("authToken");
    setUser(null);
    setIsLoggedIn(false);
    navigate("/login");
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        isLoading,
        setIsLoading,
        user,
        setUser,
        authenticateUser,
        handleLogout,
       
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserContextWrapper };