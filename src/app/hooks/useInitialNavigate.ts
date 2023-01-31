import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useInitialNavigate = (path: string) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(path);
  }, []);
};
