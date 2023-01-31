import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import { reduceObject } from "../../../../../app/utils";
import InformationTable from "../../../../../components/informationTable/InformationTable";
import { useAppSelector } from "../../../../../store/hooks";
import styles from "./aaveV1Styles.module.scss";
import { Chains } from "../../../../../components";

const AaveV1: React.FC = () => {
  //// hooks
  const aaveV1 = useAppSelector(
    (state) => state.crypto.octav.assetByProtocols["aave v1"]
  );

  const generalInfo = reduceObject(
    aaveV1,
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
            <InformationTable data={generalInfo} title="aave v1 Information" />
          </TabPanel>
          <TabPanel>
            <Chains
              chains={aaveV1.chains}
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

export default AaveV1;
