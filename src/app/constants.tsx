import { GiReceiveMoney, GiNewspaper } from "react-icons/gi";
import { FaGlobe } from "react-icons/fa";
import { FiDollarSign } from "react-icons/fi";
import { MainMenuItem, TitlesType } from "./types";

export const routes = {
  dashboard: "/",
  octav: "octav",
  generalInfo: "generalInfo",
  asset: "assetByProtocols",
  chains: "chains",
  nftChains: "nftChains",
  nftsByCollection: "nftsByCollection",
  globalCryptoStats: "globalCryptoStats",
  cryptocurrencies: "cryptocurrencies",
  news: "news",
  favorite: "favorite",
};

export const MAIN_MENU_ITEMS: MainMenuItem[] = [
  {
    name: "Octav",
    path: routes.octav,
    icon: <FiDollarSign />,
  },
  {
    name: "Global Crypto Stats",
    path: routes.globalCryptoStats,
    icon: <FaGlobe />,
  },
  {
    name: "Cryptocurrencies",
    path: routes.cryptocurrencies,
    icon: <GiReceiveMoney />,
  },

  { name: "News", path: routes.news, icon: <GiNewspaper /> },
];

export const statsTitles: TitlesType = {
  total24hVolume: "Total 24h Volume:",
  totalCoins: "Total Cryptocurrencies:",
  totalExchanges: "Total Exchanges:",
  totalMarketCap: "Total Market Cap:",
  totalMarkets: "Total Markets:",
};

export const octavInfoTitles: TitlesType = {
  address: "Address",
  cashBalance: "Cash Balance",
  closedPnl: "Closed Pnl",
  dailyIncome: "Daily Income",
  dailyExpense: "Daily Expense",
  fees: "Fees",
  feesFiat: "Fees Fiat",
  openPnl: "Open Pnl",
  networth: "Net Worth",
  totalCostBasis: "Total CostBasis",
};

export const octavDataTitles: TitlesType = {
  generalInfo: "General Information",
  assetByProtocols: "Asset By Protocols",
  chains: "Chains",
  nftChains: "NFT Chains",
  nftsByCollection: "NFTs By Collection",
};

export const messages = {
  rejectedFetchError: "something went wrong while fetching your data",
};

export const timePeriod = ["3h", "24h", "7d", "30d", "3m", "1y", "3y", "5y"];

///// General

export const DARK = "dark";
export const LIGHT = "light";
export const NAME = "name";
export const IMG_SMALL = "imgSmall";
export const IMG_LARGE = "imgLarge";
export const EXPLORER_URL = "explorerUrl";
export const STRING = "string";
export const DAY = "day";
export const HOUR = "hour";
export const NUMBER = "number";
export const CRYPTOCURRENCIES = "Cryptocurrencies";
// export const NUMBER = "number";
// export const NUMBER = "number";
// export const NUMBER = "number";
