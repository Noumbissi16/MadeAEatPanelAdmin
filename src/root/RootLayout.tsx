import { Outlet, useNavigate } from "react-router-dom";
import { LeftSideBar, TopBar } from "../components";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import BottomBar from "@/components/shared/BottomBar";

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
    <div className="flex w-full h-full">
      <LeftSideBar />
      <div className="flex flex-col flex-1">
        <TopBar />

        <div className="py-5 px-4 lg:pt-10 lg:pl-10 sm:h-screen md:h-full">
          <Outlet />
        </div>
        <BottomBar />
      </div>
    </div>
  );
}

export default RootLayout;
