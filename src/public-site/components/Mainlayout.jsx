import React from "react";
import Navbar from "../layout/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../app/Footer";

const Mainlayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Mainlayout;
