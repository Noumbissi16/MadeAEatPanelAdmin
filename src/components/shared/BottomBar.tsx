import { bottomBarLinks } from "@/constants";
import { Link, useLocation } from "react-router-dom";

const BottomBar = () => {
  const { pathname } = useLocation();
  return (
    <nav className="sticky bg-primary w-full bottom-0 left-0 right-0 h-[85px] md:hidden">
      <ul className="flex w-full  justify-around items-center">
        {bottomBarLinks.map((btmLink) => {
          const isActive = pathname === btmLink.route;
          return (
            <li key={btmLink.label} className={`${isActive && "border-b-4"}`}>
              <Link
                to={btmLink.route}
                className="flex flex-col items-center justify-center py-3"
              >
                <img src={btmLink.imgURL} alt={btmLink.label} />
                <p
                  className={`${isActive && "text-[14px] text-white"
                    } text-[12px] text-grey`}
                >
                  {btmLink.label}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BottomBar;
