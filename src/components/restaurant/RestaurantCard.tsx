import { IRestaurant } from "../../type";
import s from "../../styles/restaurant/RestaurantPages.module.css";

const RestaurantCard: React.FC<{ restaurant: IRestaurant }> = ({
  restaurant,
}) => {
  return (
    <div className={s.card}>
      <img
        src={restaurant.imgResto}
        alt={restaurant.nomResto}
        className={s.img}
      />
      <div className={s.gradientContainer}>
        <div className={s.gradientContent}>
          <p className={s.nomResto}>{restaurant.nomResto}</p>
          <p className={s.town}>{restaurant.town}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
