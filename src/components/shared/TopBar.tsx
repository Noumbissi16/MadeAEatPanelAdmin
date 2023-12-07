import { useSelector } from "react-redux";
import { rootState } from "../../redux/store";
import s from "../../styles/shared/TopBar.module.css";
const TopBar = () => {
  const user = useSelector((state: rootState) => state.user.user);

  return (
    <div className={s.container}>
      <div className={s.contentContainer}>
        <h2 className={s.title}>Panel Admin de Bafoussam</h2>
        <div className={s.user}>
          <div className={s.imgContainer}>
            <div className={s.status} />
            <img className={s.img} src={user.img} alt="ville restaurant" />
          </div>
          <div>
            <h4 className={s.username}>{user.username}</h4>
            <p className={s.email}>{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
