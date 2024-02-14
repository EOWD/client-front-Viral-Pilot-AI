import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect, useContext, useRef } from "react";
import Explore from "../Explore/Explore";
import UserImages from "../driveRenders/UserImages";
import { UserDataContext } from "../../../context/UserDataContext";

import ImageCard from "../ImageCard";
import "./Drive.css"
import DriveImages from "./DriveImages/DriveImages";

function Drive() {

  return (
    <div className="driveContainer">
      <h2>DRIVE</h2>

      <DriveImages />

      

      {/* <UserImages /> */}
    </div>
  );
}

export default Drive;
