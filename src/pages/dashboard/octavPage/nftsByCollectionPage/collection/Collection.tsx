import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import { reduceObject } from "../../../../../app/utils";
import { InformationTable, Chains } from "../../../../../components";
import styles from "./collectionStyles.module.scss";

const Collection: React.FC<any> = (props) => {
  /// props
  const { collectionData } = props;

  const generalInfo = reduceObject(
    collectionData,
    ["string", "number"],
    [
      "name",
      "sellPrice",
      "spotPrice",
      "contract",
      "vaultId",
      "vaultAddress",
      "totalCostBasis",
      "totalClosedPnl",
      "totalOpenPnl",
    ]
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
              title="Collection Information"
            />
          </TabPanel>
          <TabPanel>
            <Chains
              chains={collectionData.chains}
              neededGeneralTitles={[
                "name",
                "key",
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

export default Collection;
