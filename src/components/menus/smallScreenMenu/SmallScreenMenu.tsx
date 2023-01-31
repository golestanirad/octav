import { DARK, LIGHT } from "../../../app/constants";
import { useDarkMode } from "../../../app/hooks";
import BigScreenMenu from "../bigScreenMenu/BigScreenMenu";
import styles from "./smallScreenMenuStyles.module.scss";

const SmallScreenMenu: React.FC = () => {
  /// hooks
  const { isDarkMode } = useDarkMode();

  /// return
  return (
    <div className={`${styles.container} ${isDarkMode ? DARK : LIGHT}`}>
      <BigScreenMenu />
    </div>
  );
};

export default SmallScreenMenu;
