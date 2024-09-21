import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import s from "../../styles/Dashboard/Dashboard.module.css";

function Dashboard() {
  const user = useSelector((state: RootState) => state.user);

  return (
    <main>
      <header className={s.header}>
        <div>
          <h1 className="title">Dashboard</h1>
          <p className={s.welcomeMsg}>Bienvenue, {user.username}</p>
        </div>
        <select name="dsjkjds" id="" value={"dsds"}>
          <option value="choisir la period" key="jkjewk"></option>
        </select>
      </header>
      <section className={s.statsSection}>
        <div className={s.card}>
          <div className={s.flex}>
            <span className={s.cardTitle}>Commande</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M4 16H16V18H4V16ZM2 11H12V13H2V11Z"
                fill="#CCCCCC"
                fill-opacity="0.8"
              />
              <path
                d="M29.919 16.606L26.919 9.606C26.842 9.42608 26.7139 9.27273 26.5505 9.165C26.3871 9.05727 26.1957 8.99989 26 9H23V7C23 6.73478 22.8946 6.48043 22.7071 6.29289C22.5196 6.10536 22.2652 6 22 6H6V8H21V20.556C20.5443 20.8206 20.1456 21.1728 19.8267 21.5922C19.5078 22.0117 19.2751 22.4902 19.142 23H12.858C12.6146 22.0573 12.0358 21.2358 11.23 20.6894C10.4242 20.143 9.44681 19.9092 8.481 20.0319C7.51519 20.1546 6.62727 20.6253 5.98368 21.3558C5.34009 22.0863 4.98502 23.0264 4.98502 24C4.98502 24.9736 5.34009 25.9137 5.98368 26.6442C6.62727 27.3747 7.51519 27.8454 8.481 27.9681C9.44681 28.0908 10.4242 27.857 11.23 27.3106C12.0358 26.7642 12.6146 25.9427 12.858 25H19.142C19.3595 25.8582 19.857 26.6194 20.5558 27.1632C21.2545 27.7069 22.1146 28.0021 23 28.0021C23.8854 28.0021 24.7455 27.7069 25.4442 27.1632C26.143 26.6194 26.6405 25.8582 26.858 25H29C29.2652 25 29.5196 24.8946 29.7071 24.7071C29.8946 24.5196 30 24.2652 30 24V17C30 16.8645 29.9725 16.7305 29.919 16.606ZM9 26C8.60444 26 8.21776 25.8827 7.88886 25.6629C7.55996 25.4432 7.30362 25.1308 7.15224 24.7654C7.00086 24.3999 6.96126 23.9978 7.03843 23.6098C7.1156 23.2219 7.30608 22.8655 7.58579 22.5858C7.86549 22.3061 8.22186 22.1156 8.60982 22.0384C8.99778 21.9613 9.39991 22.0009 9.76537 22.1522C10.1308 22.3036 10.4432 22.56 10.6629 22.8889C10.8827 23.2178 11 23.6044 11 24C10.9995 24.5303 10.7886 25.0387 10.4136 25.4136C10.0387 25.7886 9.53027 25.9995 9 26ZM23 11H25.34L27.484 16H23V11ZM23 26C22.6044 26 22.2178 25.8827 21.8889 25.6629C21.56 25.4432 21.3036 25.1308 21.1522 24.7654C21.0009 24.3999 20.9613 23.9978 21.0384 23.6098C21.1156 23.2219 21.3061 22.8655 21.5858 22.5858C21.8655 22.3061 22.2219 22.1156 22.6098 22.0384C22.9978 21.9613 23.3999 22.0009 23.7654 22.1522C24.1308 22.3036 24.4432 22.56 24.6629 22.8889C24.8827 23.2178 25 23.6044 25 24C24.9995 24.5303 24.7886 25.0387 24.4136 25.4136C24.0387 25.7886 23.5303 25.9995 23 26ZM28 23H26.858C26.6377 22.1434 26.1394 21.3842 25.4412 20.8413C24.743 20.2983 23.8844 20.0025 23 20V18H28V23Z"
                fill="#CCCCCC"
                fill-opacity="0.8"
              />
            </svg>
          </div>
          <div className={s.flex}>
            <p className={s.status}>En cours</p>
            <p className={s.status}>Livrer</p>
          </div>
          <div className={s.flex}>
            <p className={s.value}>25</p>
            <p className={s.value}>14</p>
          </div>
        </div>
        <div className={s.card}>
          <div className={s.flex}>
            <span className={s.cardTitle}>Restaurant</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3.00999 11.22V15.71C3.00999 20.2 4.80999 22 9.29999 22H14.69C19.18 22 20.98 20.2 20.98 15.71V11.22"
                stroke="#CCCCCC"
                stroke-opacity="0.8"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 12C13.83 12 15.18 10.51 15 8.68L14.34 2H9.67L9 8.68C8.82 10.51 10.17 12 12 12Z"
                stroke="#CCCCCC"
                stroke-opacity="0.8"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.31 12C20.33 12 21.81 10.36 21.61 8.35L21.33 5.6C20.97 3 19.97 2 17.35 2H14.3L15 9.01C15.17 10.66 16.66 12 18.31 12ZM5.64 12C7.29 12 8.78 10.66 8.94 9.01L9.16 6.8L9.64001 2H6.59C3.97001 2 2.97 3 2.61 5.6L2.34 8.35C2.14 10.36 3.62 12 5.64 12ZM12 17C10.33 17 9.5 17.83 9.5 19.5V22H14.5V19.5C14.5 17.83 13.67 17 12 17Z"
                stroke="#CCCCCC"
                stroke-opacity="0.8"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <p className={s.value}>6</p>
        </div>
      </section>

      <section>
        <h1 className={s.msgSectionTitle}>Messages recent</h1>
        <table>
          <tbody>
            <tr>
              <td>
                <img
                  src="/assets/images/admin.jpg"
                  alt="user"
                  className={s.imgUser}
                />
              </td>
              <td>Leslie Alexander</td>
              <td> Service de livraison un peu lent</td>
              <td> Answered</td>
              <td>12:25</td>
            </tr>
            <tr>
              <td>
                <img
                  src="/assets/images/admin.jpg"
                  alt="user"
                  className={s.imgUser}
                />
              </td>
              <td>Leslie Alexander</td>
              <td> Service de livraison un peu lent</td>
              <td> Answered</td>
              <td>12:25</td>
            </tr>
            <tr>
              <td>
                <img
                  src="/assets/images/admin.jpg"
                  alt="user"
                  className={s.imgUser}
                />
              </td>
              <td>Leslie Alexander</td>
              <td> Service de livraison un peu lent</td>
              <td> Answered</td>
              <td>12:25</td>
            </tr>
            <tr>
              <td>
                <img
                  src="/assets/images/admin.jpg"
                  alt="user"
                  className={s.imgUser}
                />
              </td>
              <td>Leslie Alexander</td>
              <td> Service de livraison un peu lent</td>
              <td> Answered</td>
              <td>12:25</td>
            </tr>
          </tbody>
        </table>
      </section>
      <Button>See more</Button>
    </main>
  );
}

export default Dashboard;
