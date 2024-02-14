import React from "react";

import { Link } from "react-router-dom";
import {UserContext} from '../../context/UserContext';
import {useContext}from 'react'
function Footer() {
    const {isLoggedIn,isLoading}=useContext(UserContext)
    return (
    <div>
   { !isLoggedIn?(<> <Link to={'/'}>Home</Link>
     <Link to={'/login'}>Login</Link>
     
     <Link to={'/signup'}>Signup</Link></>): ''}
    </div>
  );
 
}

export default Footer;
