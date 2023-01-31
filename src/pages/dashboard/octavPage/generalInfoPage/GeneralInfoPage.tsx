import { reduceObject } from "../../../../app/utils";
import InformationTable from "../../../../components/informationTable/InformationTable";
import { useAppSelector } from "../../../../store/hooks";
import styles from "./generalInfoPageStyles.module.scss";

const GeneralInfo: React.FC = () => {
  //// hooks
  const octavData = useAppSelector((state) => state.crypto.octav);

  const generalInfo = reduceObject(octavData);

  /// return
  return (
    <div className={styles.container}>
      <InformationTable data={generalInfo} title="General Information" />
    </div>
  );
};

export default GeneralInfo;
