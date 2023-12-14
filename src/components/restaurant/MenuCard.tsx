import { MenuItem } from "../../types";
import s from "../../styles/restaurant/SingleRestaurant.module.css";

const MenuCard: React.FC<{ menu: MenuItem }> = ({ menu }) => {
  return (
    <div className={s.card}>
      <img src={menu.imgMenu} alt={menu.nom} className={s.img} />
      <div className={s.gradientContainer}>
        <div className={s.gradientContent}>
          <p className={s.nomRestoCard}>{menu.nom}</p>
          <p className={s.townCard}>{menu.prix}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
