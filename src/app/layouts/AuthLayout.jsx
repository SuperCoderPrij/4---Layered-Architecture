import React from "react";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="p-2">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
