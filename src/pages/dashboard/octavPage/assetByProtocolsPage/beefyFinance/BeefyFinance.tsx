import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import { reduceObject } from "../../../../../app/utils";
import { Chains } from "../../../../../components";
import InformationTable from "../../../../../components/informationTable/InformationTable";
import { useAppSelector } from "../../../../../store/hooks";
import styles from "./beefyFinanceStyles.module.scss";

const BeefyFinance: React.FC = () => {
  //// hooks
  const beefyFinance = useAppSelector(
    (state) => state.crypto.octav.assetByProtocols["beefy finance"]
  );

  const generalInfo = reduceObject(
    beefyFinance,
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
            <InformationTable
              data={generalInfo}
              title="Beefy Finance Information"
            />
          </TabPanel>
          <TabPanel>
            <Chains
              chains={beefyFinance.chains}
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

export default BeefyFinance;
