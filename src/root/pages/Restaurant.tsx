import { useEffect, useState } from "react";
import { RestaurantCard } from "../../components";
import { RootState } from "../../redux/store";
import s from "../../styles/restaurant/RestaurantPages.module.css";
import { useSelector } from "react-redux";
import { IRestaurant } from "@/types";
import axios from "axios";
const Restaurant = () => {
  // const restaurants = useSelector((state: RootState) => state.restaurants);
  const user = useSelector((state: RootState) => state.user);


  const [restaurants, setRestaurants] = useState<IRestaurant[]>([])
  const [isFetching, setIsFetching] = useState(true)
  const [fetchError, setFetchError] = useState<string>("")


  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const results = await axios.get("http://localhost:8000/api/v1/agence/restaurants", {
          headers: {
            "Authorization": `Bearer ${user.token}`
          }
        })
        // setRestaurants(results.data.restaurants)
      } catch (error: any) {
        console.log(error.response.data.msg)
      }
    }
    fetchRestaurant()
  }, [])




  return (
    <section className="h-full">
      <h1 className="title">Restaurant</h1>
      {
        restaurants.length === 0 ? (<>
          <p>No restaurant available for now</p>
        </>) :
          <div className={s.cardContainer}>
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant._id} restaurant={restaurant} />
            ))}
          </div>
      }
    </section>
  );
};

export default Restaurant;
