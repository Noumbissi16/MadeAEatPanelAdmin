import { IRestaurant } from "../../types";
import s from "../../styles/restaurant/RestaurantPages.module.css";
import { Link } from "react-router-dom";

const RestaurantCard: React.FC<{ restaurant: IRestaurant }> = ({
  restaurant,
}) => {
  return (
    <Link to={`/restaurants/${restaurant._id}`}>
      <div className={s.card}>
        <img
          src={restaurant.profile}
          alt={restaurant.name}
          className={s.img}
        />
        <div className={s.gradientContainer}>
          <div className={s.gradientContent}>
            <p className={s.nomResto}>{restaurant.name}</p>
            <p className={s.town}>{restaurant.ville}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
