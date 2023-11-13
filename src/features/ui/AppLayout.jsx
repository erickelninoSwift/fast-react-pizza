import React from "react";
import Header from "./Header";
import CartOverview from "../cart/CartOverview";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
        <CartOverview />
      </div>
    </>
  );
};

export default AppLayout;
