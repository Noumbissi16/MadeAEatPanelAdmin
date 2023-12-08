import { Outlet } from "react-router-dom";
import { LeftSideBar, TopBar } from "../components";

function RootLayout() {
  return (
    <div
      style={{
        display: "flex",
        // width: "100vw"
      }}
    >
      <LeftSideBar />
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <TopBar />
        <div
          style={{
            width: "93%",
            margin: "0 auto",
            paddingTop: "25px",
            paddingBottom: "25px",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default RootLayout;
