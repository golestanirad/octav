import _ from "lodash";

import { TitlesType } from "../../app/types";
import styles from "./informationTableStyles.module.scss";

interface Props {
  data: TitlesType;
  title?: string;
}
const Informationtable: React.FC<Props> = (props) => {
  /// props
  const { data, title } = props;
  /// return
  return (
    <div className={styles.container}>
      {title && <h1>{title}</h1>}
      <div className={styles.stats}>
        {_.map(data, (value, key) => (
          <div className={styles.stat} key={key}>
            <span className={styles.key}>{key}</span>
            <span className={styles.value}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Informationtable;
