import { NavLink } from "react-router-dom";
import { octavDataTitles } from "../../app/constants";
import styles from "./octavMenuStyles.module.scss";

const OctavMenu: React.FC = () => {
  //// helopers
  const menuPaths = Object.keys(octavDataTitles);

  /// return
  return (
    <div className={styles.container}>
      {menuPaths.map((path) => (
        <NavLink
          key={path}
          className={({ isActive }) => {
            return `${styles.link}  ${isActive ? styles.active : ""}`;
          }}
          to={path}
        >
          {octavDataTitles[path]}
        </NavLink>
      ))}
    </div>
  );
};

export default OctavMenu;
