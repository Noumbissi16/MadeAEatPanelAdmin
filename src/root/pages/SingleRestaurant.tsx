import { useNavigate, useParams } from "react-router-dom";
import { GoBack } from "../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import s from "../../styles/restaurant/SingleRestaurant.module.css";
import MenuCard from "../../components/restaurant/MenuCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { RestaurantInfos } from "@/types";
import { DEV_BACKEND_BASE_URL } from "@/constants";

const SingleRestaurant = () => {
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.user);

  const { id } = useParams();
  if (!id) {
    navigate(-1)
    return null
  } console.log({ id })


  const [restaurant, setrestaurant] = useState<RestaurantInfos>()
  const [isFetching, setIsFetching] = useState(false)
  const [fetchError, setFetchError] = useState<string>("")

  useEffect(() => {
    const fetchRestaurant = async () => {
      setIsFetching(true)
      try {
        const results = await axios.get(`${DEV_BACKEND_BASE_URL}/agence/restaurant/${id}`, {
          headers: {
            "Authorization": `Bearer ${user.token}`
          }
        })
        console.log({ results })
        setrestaurant(results.data.restaurantInfos)
      } catch (error: any) {
        console.log(error.response.data)
        setFetchError(error.response.data || "Error fetching restaurant data")
      } finally {
        setIsFetching(false)
      }
    }
    fetchRestaurant()
  }, [id, user.token])

  return (
    <>

      {
        isFetching ? <p>Loading...</p> : fetchError ? <p>{fetchError}</p> :
          <>
            <h1 className="title">Restaurant</h1>
            <GoBack />
            <main className={s.main}>
              <div className="h-[231px] max-sm:w-full w-[300px] overflow-hidden">
                <img
                  src={restaurant?.profile}
                  alt={restaurant?.name}
                  className={s.imgResto}
                />
              </div>
              <div className={s.restoInfo + " bg-white max-sm:w-full w-[300px]"}>
                <div className={s.adminContainer}>
                  <img
                    src={restaurant?.ownedBy.profileImage}
                    alt={restaurant?.ownedBy.name}
                    className={s.adminImg}
                  />
                  <div>
                    <p className={s.adminNom}>{restaurant?.ownedBy.name}</p>
                    <p className={s.adminEmail}>{restaurant?.ownedBy.email}</p>
                  </div>
                </div>
                <div className={s.seperator} />
                <div>
                  <div className={s.restoFlex}>
                    <h5 className={s.nomResto}>{restaurant?.name}</h5>
                    <p className={s.town}>{restaurant?.ville}</p>
                  </div>
                  <span className={s.localisation}>{restaurant?.location}</span>
                </div>
              </div>
            </main>

            <section className={s.menuSection}>
              <h2 className={"sectionTitle"}>Menu</h2>
              <div className={s.menuCardContainer}>
                {restaurant?.menus.map((menu) => (
                  <MenuCard menu={menu} />
                ))}
              </div>
            </section>

            {/* <section>
        <h2 className="sectionTitle">Commande</h2>
        <h3 className="subSectionTitle">Commande En Cours</h3>
        <table>
          <thead>
            <th>Menu</th>
            <th>Prix</th>
            <th>Quantite</th>
            <th>Commander par</th>
            <th>Lieu Livraison</th>
          </thead>
          <tbody>
            <tr>
              <td data-label="Menu">Riz sauce tomate</td>
              <td data-label="Prix">2500F</td>
              <td data-label="Quantite">2</td>
              <td data-label="Commander par">Noumbissi stael</td>
              <td data-label="Lieu Livraison">Baleng</td>
            </tr>
            <tr>
              <td data-label="Menu">Riz sauce tomate</td>
              <td data-label="Prix">2500F</td>
              <td data-label="Quantite">2</td>
              <td data-label="Commander par">Noumbissi stael</td>
              <td data-label="Lieu Livraison">Baleng</td>
            </tr>
            <tr>
              <td data-label="Menu">Riz sauce tomate</td>
              <td data-label="Prix">2500F</td>
              <td data-label="Quantite">2</td>
              <td data-label="Commander par">Noumbissi stael</td>
              <td data-label="Lieu Livraison">Baleng</td>
            </tr>
          </tbody>
        </table>
        <h3 className="subSectionTitle">Commande livrer</h3>
        <table>
          <thead>
            <th>Menu</th>
            <th>Prix</th>
            <th>Quantite</th>
            <th>Commander par</th>
            <th>Lieu Livraison</th>
          </thead>
          <tbody>
            <tr>
              <td data-label="Menu">Riz sauce tomate</td>
              <td data-label="Prix">2500F</td>
              <td data-label="Quantite">2</td>
              <td data-label="Commander par">Noumbissi stael</td>
              <td data-label="Lieu Livraison">Baleng</td>
            </tr>
            <tr>
              <td data-label="Menu">Riz sauce tomate</td>
              <td data-label="Prix">2500F</td>
              <td data-label="Quantite">2</td>
              <td data-label="Commander par">Noumbissi stael</td>
              <td data-label="Lieu Livraison">Baleng</td>
            </tr>
            <tr>
              <td data-label="Menu">Riz sauce tomate</td>
              <td data-label="Prix">2500F</td>
              <td data-label="Quantite">2</td>
              <td data-label="Commander par">Noumbissi stael</td>
              <td data-label="Lieu Livraison">Baleng</td>
            </tr>
          </tbody>
        </table>
      </section> */}
          </>
      }
    </>
  );
};

export default SingleRestaurant;
