import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { useAppSelector } from "../../store/hooks";
import { Loader } from "../";
import styles from "./cryptoChartStyles.module.scss";
import { History } from "../../app/types";
import { DAY } from "../../app/constants";

interface Props {
  timeType?: "day" | "hour";
  coinHistory: History[];
}
const CryptoChart: React.FC<Props> = (props) => {
  ///props
  const { timeType = DAY, coinHistory } = props;

  //// hooks
  const coinPriceHistory = coinHistory?.map(({ price, timestamp }) => ({
    price: Number(price),
    timestamp:
      timeType === DAY
        ? new Date(timestamp * 1000).toLocaleDateString()
        : new Date(timestamp * 1000).toLocaleTimeString(),
  }));

  const isLoading = useAppSelector(
    (state) => state.crypto.loadings.isLoadingHistory
  );

  /// return
  if (isLoading) {
    return (
      <div className="loader">
        <Loader />
      </div>
    );
  }

  return (
    <ResponsiveContainer
      width={"100%"}
      height="100%"
      className={styles.container}
    >
      <LineChart data={coinPriceHistory?.reverse()}>
        <XAxis dataKey="timestamp" angle={10} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          dot={false}
          type="monotone"
          dataKey="price"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CryptoChart;
