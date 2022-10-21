import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Componenets/Header/Header";

const Main = ({ cart }) => {
  return (
    <div>
      <Header cart={cart} />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Main;
