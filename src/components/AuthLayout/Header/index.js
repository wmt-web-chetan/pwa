
import "./Header.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserData } from "../../../services/Store/GetUserData/actions";

const Headers = () => {
  const dispatch = useDispatch();
  

  return (
    <div className="myClass">
      <h1>Header</h1>
    </div>
  );
};

export default Headers;
