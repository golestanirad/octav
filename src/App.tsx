import { Routes, Route } from "react-router-dom";

import {
  CryptoDetailsPage,
  DashboardPage,
  ErrorPage,
  GlobalCryptoStatsPage,
  CryptoCurrencies,
  NewsPage,
  OctavPage,
  AssetByProtocolsPage,
  ChainsPage,
  NFTChainsPage,
  NFTsByCollectionPage,
  GeneralInfoPage,
} from "./pages";
import { routes } from "./app/constants";
import { useAppSelector } from "./store/hooks";

const App: React.FC = () => {
  /// hooks
  const { coins, favoriteCoins } = useAppSelector((state) => state.crypto);

  /// helper
  const fc = coins.filter((coin) => favoriteCoins.includes(coin.uuid));

  ///// return
  return (
    <Routes>
      <Route path={routes.dashboard} element={<DashboardPage />}>
        <Route path={routes.octav} element={<OctavPage />}>
          <Route path={routes.generalInfo} element={<GeneralInfoPage />} />
          <Route path={routes.asset} element={<AssetByProtocolsPage />} />
          <Route path={routes.chains} element={<ChainsPage />} />
          <Route path={routes.nftChains} element={<NFTChainsPage />} />
          <Route
            path={routes.nftsByCollection}
            element={<NFTsByCollectionPage />}
          />
        </Route>

        <Route
          path={routes.globalCryptoStats}
          element={<GlobalCryptoStatsPage />}
        />

        <Route
          path={routes.cryptocurrencies}
          element={<CryptoCurrencies coins={coins} />}
        >
          <Route path=":coinId" element={<CryptoDetailsPage />} />
        </Route>

        <Route path={routes.news} element={<NewsPage />} />

        <Route path={routes.favorite} element={<CryptoCurrencies coins={fc} />}>
          <Route path=":coinId" element={<CryptoDetailsPage />} />
        </Route>
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
