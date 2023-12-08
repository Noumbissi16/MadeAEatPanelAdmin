import { RestaurantCard } from "../../components";
import { rootState } from "../../redux/store";
import s from "../../styles/restaurant/RestaurantPages.module.css";
import { useSelector } from "react-redux";
const Restaurant = () => {
  const restaurants = useSelector((state: rootState) => state.restaurants);
  return (
    <>
      <h1 className="title">Restaurant</h1>
      <div className={s.cardContainer}>
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </>
  );
};

export default Restaurant;
