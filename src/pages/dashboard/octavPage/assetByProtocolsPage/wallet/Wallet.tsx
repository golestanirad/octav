import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import { reduceObject } from "../../../../../app/utils";
import InformationTable from "../../../../../components/informationTable/InformationTable";
import { useAppSelector } from "../../../../../store/hooks";
import { Chains } from "../../../../../components";
import styles from "./walletStyles.module.scss";

const Wallet: React.FC = () => {
  //// hooks
  const octavData = useAppSelector(
    (state) => state.crypto.octav.assetByProtocols.wallet
  );

  const generalInfo = reduceObject(
    octavData,
    ["string", "number"],
    ["name", "value", "totalCostBasis", "totalClosedPnl", "totalOpenPnl"]
  );

  /// return
  return (
    <div className={styles.container}>
      <Tabs>
        <TabList>
          <Tab>General Information</Tab>
          <Tab>Chains</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <InformationTable data={generalInfo} title="Wallet Information" />
          </TabPanel>
          <TabPanel>
            <Chains
              chains={octavData.chains}
              neededGeneralTitles={[
                "name",
                "value",
                "totalCostBasis",
                "totalClosedPnl",
                "totalOpenPnl",
              ]}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Wallet;
