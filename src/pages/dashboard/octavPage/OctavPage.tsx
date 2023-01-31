import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { Loader, OctavMenu } from "../../../components";
import { fetchOctavData } from "../../../store/crypto/cryptoAPI";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import styles from "./octavPageStyles.module.scss";

const OctavPage = () => {
  //// hooks
  const isLoading = useAppSelector(
    (state) => state.crypto.loadings.isLoadingOctav
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOctavData());
  }, []);

  ///// return
  if (isLoading) {
    return (
      <div className="loader">
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <OctavMenu />
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
};

export default OctavPage;
