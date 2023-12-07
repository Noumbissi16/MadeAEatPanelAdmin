import { Outlet } from "react-router-dom";
import { LeftSideBar, TopBar } from "../components";

function RootLayout() {
  return (
    <div style={{ display: "flex", width: "100vw" }}>
      <LeftSideBar />
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <TopBar />
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
