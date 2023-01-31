import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useIsOctavDataReady } from "../../../../app/hooks";
import { Loader } from "../../../../components";
import AaveV1 from "./aave v1/AaveV1";
import AaveV3 from "./aave v3/AaveV3";
import styles from "./assetByProtocolsPageStyles.module.scss";
import BeefyFinance from "./beefyFinance/BeefyFinance";
import Clearpool from "./clearpool/Clearpool";
import Uniswap from "./uniswap/Uniswap";
import Wallet from "./wallet/Wallet";

const AssetByProtocolsPage: React.FC = () => {
  ///hooks
  const isOctavDataReady = useIsOctavDataReady();

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
      <Tabs>
        <TabList>
          <Tab>Wallet</Tab>
          <Tab>aave v1</Tab>
          <Tab>aave v3</Tab>
          <Tab>Clear Pool</Tab>
          <Tab>Beefy Finance</Tab>
          <Tab>Uniswap</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Wallet />
          </TabPanel>
          <TabPanel>
            <AaveV1 />
          </TabPanel>
          <TabPanel>
            <AaveV3 />
          </TabPanel>
          <TabPanel>
            <Clearpool />
          </TabPanel>
          <TabPanel>
            <BeefyFinance />
          </TabPanel>
          <TabPanel>
            <Uniswap />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default AssetByProtocolsPage;
