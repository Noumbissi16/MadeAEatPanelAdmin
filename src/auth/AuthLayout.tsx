import React, { useEffect, useLayoutEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

function AuthLayout() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default AuthLayout;
