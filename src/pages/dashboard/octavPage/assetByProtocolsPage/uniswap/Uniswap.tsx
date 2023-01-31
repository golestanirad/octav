import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import { reduceObject } from "../../../../../app/utils";
import { Chains } from "../../../../../components";
import InformationTable from "../../../../../components/informationTable/InformationTable";
import { useAppSelector } from "../../../../../store/hooks";
import styles from "./uniswapStyles.module.scss";

const Uniswap: React.FC = () => {
  //// hooks
  const uniswap = useAppSelector(
    (state) => state.crypto.octav.assetByProtocols.uniswap
  );

  const generalInfo = reduceObject(
    uniswap,
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
            <InformationTable data={generalInfo} title="uniswap Information" />
          </TabPanel>
          <TabPanel>
            <Chains
              chains={uniswap.chains}
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

export default Uniswap;
