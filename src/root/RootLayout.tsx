import { Outlet, useNavigate } from "react-router-dom";
import { LeftSideBar, TopBar } from "../components";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect, useLayoutEffect } from "react";

function RootLayout() {
  const navigate = useNavigate();

  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated
  );

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/sign-in");
    }
  }, [isAuthenticated]);

  return (
    <div
      style={{
        display: "flex",
        // width: "100vw"
      }}
    >
      <LeftSideBar />
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        {/* <TopBar /> */}
        <div
          style={{
            width: "93%",
            margin: "0 auto",
            paddingTop: "25px",
            paddingBottom: "25px",
          }}
        >
          {/* <Outlet /> */}
        </div>
      </div>
    </div>
  );
}

export default RootLayout;
