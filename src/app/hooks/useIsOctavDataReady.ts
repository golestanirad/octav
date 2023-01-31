import { useAppSelector } from "../../store/hooks";

export const useIsOctavDataReady = () => {
  const isLoading = useAppSelector(
    (state) => state.crypto.loadings.isLoadingOctav
  );

  const octav = useAppSelector((state) => state.crypto.octav);

  return octav && !isLoading;
};
