import { useAppSelector } from "../../../../store/hooks";
import styles from "./nftChainsPageStyles.module.scss";
import { useIsOctavDataReady } from "../../../../app/hooks";
import { Chains, Loader } from "../../../../components";

const NFTChainsPage: React.FC = () => {
  /// hooks
  const isOctavDataReady = useIsOctavDataReady();

  const chains = useAppSelector((state) => state.crypto.octav?.nftChains);

  /// return
  if (!isOctavDataReady) {
    return (
      <div className="loader">
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Chains
        chains={chains}
        neededGeneralTitles={[
          "name",
          "value",
          "valuePercentile",
          "totalCostBasis",
          "totalClosedPnl",
          "totalOpenPnl",
        ]}
      />
    </div>
  );
};

export default NFTChainsPage;
