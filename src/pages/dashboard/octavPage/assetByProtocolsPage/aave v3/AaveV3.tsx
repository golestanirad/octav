import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import { Chains } from "../../../../../components";
import { reduceObject } from "../../../../../app/utils";
import InformationTable from "../../../../../components/informationTable/InformationTable";
import { useAppSelector } from "../../../../../store/hooks";
import styles from "./aaveV3Styles.module.scss";

const AaveV3: React.FC = () => {
  //// hooks
  const aaveV3 = useAppSelector(
    (state) => state.crypto.octav.assetByProtocols["aave v3"]
  );

  const generalInfo = reduceObject(
    aaveV3,
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
            <InformationTable data={generalInfo} title="aave v3 Information" />
          </TabPanel>
          <TabPanel>
            <Chains
              chains={aaveV3.chains}
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

export default AaveV3;
