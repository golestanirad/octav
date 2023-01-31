import styles from "./bigScreenMenuStyles.module.scss";
import MenuLink from "../../menuLink/MenuLink";
import {
  CRYPTOCURRENCIES,
  DARK,
  LIGHT,
  MAIN_MENU_ITEMS,
  octavDataTitles,
  routes,
} from "../../../app/constants";
import { useAppSelector } from "../../../store/hooks";
import { MainMenuItem } from "../../../app/types";
import { BsFillHeartFill } from "react-icons/bs";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDarkMode } from "../../../app/hooks";

const BigScreenMenu: React.FC = () => {
  //// hooks
  const { coins, favoriteCoins } = useAppSelector((state) => state.crypto);

  const { isDarkMode } = useDarkMode();

  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.includes(routes.favorite) && favoriteCoins.length === 0) {
      navigate("/");
    }
  }, [pathname, favoriteCoins.length]);

  /// helper
  const subMenue = (menuItem: MainMenuItem) => {
    switch (menuItem.name) {
      case CRYPTOCURRENCIES:
        return coins;
    }
  };
  const fc = coins.filter((coin) => favoriteCoins.includes(coin.uuid));

  /// return
  return (
    <div className={`${styles.container} ${isDarkMode ? DARK : LIGHT}`}>
      {MAIN_MENU_ITEMS.map((menuItem) => (
        <MenuLink
          key={menuItem.name}
          menuItem={menuItem}
          subMenu={subMenue(menuItem)}
        />
      ))}
      <div
        style={{
          transition: "1s",
          transform: !fc.length ? "translateX(-1000px)" : "",
        }}
      >
        <MenuLink
          key={"favoriteCoins"}
          menuItem={{
            icon: <BsFillHeartFill />,
            name: "Favorite Coins",
            path: "/favorite",
          }}
          subMenu={fc}
        />
      </div>
    </div>
  );
};

export default BigScreenMenu;
