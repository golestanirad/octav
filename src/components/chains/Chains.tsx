import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import { reduceObject } from "../../app/utils";
import styles from "./chainsStyles.module.scss";
import InformationTable from "../informationTable/InformationTable";
import AssetCard from "../assetCard/assetCard";
import { NUMBER, STRING } from "../../app/constants";

interface Props {
  chains: { [key: string]: any };
  neededGeneralTitles?: string[];
}
const Chains: React.FC<Props> = (props) => {
  ///// props
  const { chains, neededGeneralTitles } = props;

  /// helpers
  const getGeneralInformation = (name: string) => {
    return reduceObject(chains[name], [STRING, NUMBER], neededGeneralTitles);
  };

  const getOuterProtocolPositions = (name: string) => {
    return chains[name]?.protocolPositions?.[
      Object.keys(chains[name]?.protocolPositions)[0]
    ];
  };

  const getInnerProtocolPositions = (name: string) => {
    return getOuterProtocolPositions(name)?.protocolPostions[0];
  };

  const getOurProtocolPositionsKey = (name: string) => {
    return Object.keys(chains[name]?.protocolPositions)[0];
  };

  const getRootChainsAssets = (name: string) => {
    return chains[name].assets;
  };
  const chainsNames = Object.keys(chains);

  /// return
  if (!chains) {
    return <div className={styles.container}>No Chains Data</div>;
  }
  return (
    <div className={styles.container}>
      <Tabs>
        <TabList>
          {chainsNames.map((name) => (
            <Tab key={name}>{name}</Tab>
          ))}
        </TabList>

        <TabPanels>
          {chainsNames.map((name, index) => {
            const outerPP = getOuterProtocolPositions(name);
            const innerPP = getInnerProtocolPositions(name);
            const rootChainsAssets = getRootChainsAssets(name);

            return (
              <TabPanel key={name}>
                <div className={styles.container}>
                  <InformationTable data={getGeneralInformation(name)} />

                  {rootChainsAssets?.length ? (
                    <>
                      <h1>---ROOT-ASSETS---({name})</h1>
                      {rootChainsAssets.map(
                        (asset: { [key: string]: any }, index: number) => (
                          <AssetCard asset={asset} key={index} /> ///using index as a key is fine IF the list is stable (we don't add or remove or reorder the list) P.S the reason the we use index but not uuid is that for some assets we have "" as uuid which should be corrected from the backend json file
                        )
                      )}
                    </>
                  ) : null}

                  {outerPP?.assets.length ? (
                    <>
                      <h1>
                        ---{getOurProtocolPositionsKey(name)}
                        ---ASSETS---
                      </h1>
                      {outerPP.assets.map(
                        (asset: { [key: string]: any }, index: number) => (
                          <AssetCard asset={asset} key={index} />
                        )
                      )}
                    </>
                  ) : null}

                  {innerPP ? (
                    <div className={styles.cards}>
                      {innerPP.assets.length ? (
                        <>
                          <h2>Assets</h2>
                          <div className={styles.assets}>
                            {innerPP.assets.map(
                              (
                                asset: { [key: string]: any },
                                index: number
                              ) => (
                                <AssetCard asset={asset} key={index} />
                              )
                            )}
                          </div>
                        </>
                      ) : null}
                      {innerPP.rewardAssets.length ? (
                        <>
                          <h2>Reward Assets</h2>
                          <div className={styles.assets}>
                            {innerPP.rewardAssets.map(
                              (
                                asset: { [key: string]: any },
                                index: number
                              ) => (
                                <AssetCard asset={asset} key={index} />
                              )
                            )}
                          </div>
                        </>
                      ) : null}
                      {innerPP.supplyAssets.length ? (
                        <>
                          <h2>Supply Assets</h2>
                          <div className={styles.assets}>
                            {innerPP.supplyAssets.map(
                              (
                                asset: { [key: string]: any },
                                index: number
                              ) => (
                                <AssetCard asset={asset} key={index} />
                              )
                            )}
                          </div>
                        </>
                      ) : null}
                      {innerPP.borrowAssets.length ? (
                        <>
                          <h2>Borrow Assets</h2>
                          <div className={styles.assets}>
                            {innerPP.borrowAssets.map(
                              (
                                asset: { [key: string]: any },
                                index: number
                              ) => (
                                <AssetCard asset={asset} key={index} />
                              )
                            )}
                          </div>
                        </>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </TabPanel>
            );
          })}
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Chains;
