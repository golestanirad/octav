import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import { reduceObject } from "../../../../../app/utils";
import { Chains } from "../../../../../components";
import InformationTable from "../../../../../components/informationTable/InformationTable";
import { useAppSelector } from "../../../../../store/hooks";
import styles from "./clearpoolStyles.module.scss";

const Clearpool: React.FC = () => {
  //// hooks
  const clearpool = useAppSelector(
    (state) => state.crypto.octav.assetByProtocols.clearpool
  );

  /// helpers
  const generalInfo = reduceObject(
    clearpool,
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
              title="clearpool Information"
            />
          </TabPanel>
          <TabPanel>
            <Chains
              chains={clearpool.chains}
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

export default Clearpool;
