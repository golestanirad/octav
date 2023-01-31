import { Opacity } from "../";
import styles from "./assetCardStyles.module.scss";
import { useDarkMode } from "../../app/hooks";
import { convertCamelCaseToTitle, getObjectKeys } from "../../app/utils";
import {
  DARK,
  EXPLORER_URL,
  IMG_LARGE,
  IMG_SMALL,
  LIGHT,
  NAME,
} from "../../app/constants";

interface Props {
  asset: { [key: string]: any };
}
const AssetCard: React.FC<Props> = (props) => {
  /// props
  const { asset } = props;
  const { explorerUrl, imgSmall, name } = asset;

  /// hooks
  const { isDarkMode } = useDarkMode();

  /// helpers
  const assetNames = getObjectKeys(asset);

  /// return
  return (
    <Opacity>
      <a
        href={explorerUrl}
        target={"_blank"}
        rel="noreferrer"
        style={{ all: "unset" }}
      >
        <div className={`${styles.container} card`}>
          <div className={styles.header}>
            <span className={styles.name}>{name}</span>
            <img
              src={imgSmall}
              alt={name}
              className={`${styles.logo} ${isDarkMode ? DARK : LIGHT}`}
            />
          </div>
          <div className={styles.line} />
          <div className={styles.info}>
            {assetNames.map((name) =>
              ![NAME, IMG_SMALL, IMG_LARGE, EXPLORER_URL].includes(name) ? (
                <p key={name}>
                  {convertCamelCaseToTitle(name)}: <span>{asset[name]} </span>
                </p>
              ) : null
            )}
          </div>
        </div>
      </a>
    </Opacity>
  );
};

export default AssetCard;
