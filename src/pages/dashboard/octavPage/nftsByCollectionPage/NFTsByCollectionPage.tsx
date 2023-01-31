import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useIsOctavDataReady } from "../../../../app/hooks";
import { Loader, Search } from "../../../../components";
import { useAppSelector } from "../../../../store/hooks";

import styles from "./nftsByCollectionPageStyles.module.scss";
import Collection from "./collection/Collection";
import { useState } from "react";

const NFTsByCollectionPage: React.FC = () => {
  ///hooks
  const isOctavDataReady = useIsOctavDataReady();

  const [searchedCollection, setSearchedCollection] = useState("");

  const octavData = useAppSelector(
    (state) => state.crypto.octav?.nftsByCollection
  );

  /// conditional return
  if (!isOctavDataReady) {
    return (
      <div className="loader">
        <Loader />
      </div>
    );
  }

  /// helpers
  const collections = Object.keys(octavData);

  const filteredCollectionsBySearch = collections.filter((Collection) =>
    Collection.toLocaleLowerCase().includes(
      searchedCollection.toLocaleLowerCase()
    )
  );

  //// return
  return (
    <div className={styles.container}>
      <Search
        searchTerm={searchedCollection}
        onChange={(e) => setSearchedCollection(e.target.value)}
      />
      <Tabs isLazy>
        <TabList className={styles.tablist}>
          {filteredCollectionsBySearch.map((collection) => (
            <Tab key={collection}>{collection}</Tab>
          ))}
        </TabList>

        <TabPanels>
          {filteredCollectionsBySearch.map((collection) => (
            <TabPanel key={collection}>
              <Collection collectionData={octavData[collection]} />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default NFTsByCollectionPage;
