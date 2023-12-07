import { Outlet } from "react-router-dom";
import { LeftSideBar } from "../components";

function RootLayout() {
  return (
    <div style={{ display: "flex" }}>
      <LeftSideBar />
      <Outlet />
    </div>
  );
}

export default RootLayout;
