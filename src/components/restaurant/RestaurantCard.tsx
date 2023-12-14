import { IRestaurant } from "../../types";
import s from "../../styles/restaurant/RestaurantPages.module.css";
import { Link } from "react-router-dom";

const RestaurantCard: React.FC<{ restaurant: IRestaurant }> = ({
  restaurant,
}) => {
  return (
    <Link to={`/restaurants/${restaurant.id}`}>
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
    </Link>
  );
};

export default RestaurantCard;
