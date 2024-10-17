import { IRestaurant } from "../../types";
import s from "../../styles/restaurant/RestaurantPages.module.css";
import { Link } from "react-router-dom";

const RestaurantCard: React.FC<{ restaurant: IRestaurant }> = ({
  restaurant,
}) => {
  return (
    <div className="h-72 overflow-hidden relative rounded-[8px] flex-shrink-0 max-sm:w-full w-[300px]">
      <Link to={`/restaurants/${restaurant._id}`}>
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
      </Link>
    </div>
  );
};

export default RestaurantCard;
