import { useParams } from "react-router-dom";
import { GoBack } from "../../components";
import { useSelector } from "react-redux";
import { rootState } from "../../redux/store";
import s from "../../styles/restaurant/SingleRestaurant.module.css";
import MenuCard from "../../components/restaurant/MenuCard";

const SingleRestaurant = () => {
  const { id } = useParams();
  const restaurant = useSelector((state: rootState) =>
    state.restaurants.find((resto) => resto.id === Number(id))
  );

  console.log(restaurant);

  return (
    <>
      <h1 className="title">Restaurant</h1>
      <GoBack />
      <main className={s.main}>
        <img
          src={restaurant?.imgResto}
          alt={restaurant?.nomResto}
          className={s.imgResto}
        />
        <div className={s.restoInfo}>
          <div className={s.adminContainer}>
            <img
              src={restaurant?.imgAdmin}
              alt={restaurant?.nomResto}
              className={s.adminImg}
            />
            <div>
              <p className={s.adminNom}>{restaurant?.nomResto}</p>
              <p className={s.adminEmail}>{restaurant?.nomResto}</p>
            </div>
          </div>
          <div className={s.seperator} />
          <div>
            <div className={s.restoFlex}>
              <h5 className={s.nomResto}>{restaurant?.nomResto}</h5>
              <p className={s.town}>{restaurant?.town}</p>
            </div>
            <span className={s.localisation}>{restaurant?.localisation}</span>
          </div>
        </div>
      </main>

      <section className={s.menuSection}>
        <h2 className={"sectionTitle"}>Menu</h2>
        <div className={s.menuCardContainer}>
          {restaurant?.menu.map((menu) => (
            <MenuCard menu={menu} />
          ))}
        </div>
      </section>

      <section>
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
      </section>
    </>
  );
};

export default SingleRestaurant;
