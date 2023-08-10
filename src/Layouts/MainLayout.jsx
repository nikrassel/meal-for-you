import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import "../scss/app.scss";

const MainLayout = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
