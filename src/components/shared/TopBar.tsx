import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import s from "../../styles/shared/TopBar.module.css";
import { MdAccountCircle } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { logOutUserAction } from "@/redux/slice/userSlice";
import { useNavigate } from "react-router-dom";
import React, { MouseEventHandler } from "react";
const TopBar = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function logOutUser() {
    console.log("login out");

    dispatch(logOutUserAction());
  }

  function handleClickProfile(e: any) {
    navigate("/profile");
    // e.stopPropagation();
  }

  return (
    <div
      className={
        "flex justify-between items-center bg-white py-3 px-6 drop-shadow-md"
      }
    >
      <h2 className={s.title}>Panel Admin de Bafoussam</h2>
      <div
        className={s.user + " items-center cursor-pointer"}
        onClick={handleClickProfile}
      >
        <div className={s.imgContainer}>
          <div className={s.status} />
          {user.profile !== null || "" ? (
            <MdAccountCircle size={40} />
          ) : (
            <img className={s.img} src={user.profile} alt="profile" />
          )}
        </div>
        <HiOutlineLogout
          size={32}
          className="hidden max-sm:block text-grey ml-1"
          onClick={logOutUser}
        />
        <div className=" max-sm:hidden">
          <h4 className={s.username + ""}>{user.username}</h4>
          <p className={s.email}>{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
