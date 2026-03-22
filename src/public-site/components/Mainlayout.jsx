import React from "react";
import Navbar from "../layout/Navbar";
import { Outlet } from "react-router-dom";

const Mainlayout = () => {
  return (
    <div>
      <Outlet />
      <Navbar />
    </div>
  );
};

export default Mainlayout;
