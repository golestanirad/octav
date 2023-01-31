import _ from "lodash";

import { useAppSelector } from "../../store/hooks";
import Informationtable from "../informationTable/InformationTable";
import styles from "./statsStyles.module.scss";

const Stats: React.FC = () => {
  //// hooks
  const stats = useAppSelector((state) => state.crypto.stats);

  //// return
  return (
    <div className={styles.container}>
      <Informationtable data={stats as any} title={"Global Crypto Stats"} />
    </div>
  );
};

export default Stats;
