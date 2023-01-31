import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { DARK, LIGHT } from "../../app/constants";

import {
  useDarkMode,
  useInitialNavigate,
  useIsSmallScreenSideMenuOpen,
} from "../../app/hooks";
import {
  BigScreenHeader,
  BigScreenMenu,
  DarkModeToggle,
  SmallScreenHeader,
} from "../../components";
import SmallScreenMenu from "../../components/menus/smallScreenMenu/SmallScreenMenu";
import styles from "./dashboardPageStyles.module.scss";

const DashboardPage: React.FC = () => {
  ///// hooks

  const { isSmallScreenSideMenuOpen, setIsSmallScreenSideMenuOpen } =
    useIsSmallScreenSideMenuOpen();

  const { isDarkMode, toggle } = useDarkMode(true);

  useInitialNavigate("octav/generalInfo");

  /// return
  return (
    <div className={`${styles.container} ${isDarkMode ? DARK : LIGHT}`}>
      <div className={styles.mode}>
        <DarkModeToggle onClick={toggle} />
      </div>
      <div className={styles.layout}>
        <div className={styles.bigScreenMenu}>
          <BigScreenHeader />
          <BigScreenMenu />
        </div>

        <div className={styles.smallScreenMenu}>
          <SmallScreenHeader
            handleSideMenu={() =>
              setIsSmallScreenSideMenuOpen((preState) => !preState)
            }
          />
          <div
            className={`${
              !isSmallScreenSideMenuOpen ? styles.hideMenu : styles.showMenu
            }`}
          >
            <SmallScreenMenu />
          </div>
        </div>
      </div>
      <div className={styles.outlet}>
        <Outlet />
      </div>

      {/* Footer will be added if needed */}
      {/* <Footer /> */}
    </div>
  );
};

export default DashboardPage;
